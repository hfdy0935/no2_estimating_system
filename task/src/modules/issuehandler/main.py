from dataclasses import dataclass, field
from datetime import datetime, timedelta
from email import encoders
from email.mime.base import MIMEBase
from email.mime.multipart import MIMEMultipart
from io import BytesIO
import logging
from pathlib import Path
import smtplib
from typing import Literal
import zipfile
from jinja2 import Template
from email.mime.text import MIMEText

import requests
from src.config import SecretConfig
from src.utils.light import time_util, est_no2_util, path_util
from src.constant import SHARED_DIR, IssueUsernameWhiteList

logger = logging.getLogger()
# 配置见https://docs.github.com/zh/rest/issues/issues?apiVersion=2022-11-28#get-an-issue
headers = {
    'Accept': 'application/vnd.github+json',
    'Authorization': f'Bearer {SecretConfig.github_token}',
    'X-GitHub-Api-Version': '2022-11-28',
}
available_start = (
    time_util.dt2ymd(est_no2_util.start) if est_no2_util.start is not None else '-'
)
available_end = (
    time_util.dt2ymd(est_no2_util.end) if est_no2_util.end is not None else '-'
)


def log(msg: str):
    logger.info(
        f'{time_util.dt2ymdhm(time_util.beijing_now())} issue#{SecretConfig.issue_number} {msg}'
    )


@dataclass
class FetchIssueResult:
    """请求issue的结果"""

    status: Literal['fulfilled', 'rejected', 'ignore']
    msg: str = ''
    title: str = ''
    username: str = ''
    updated_at: str = ''
    content: str = ''


@dataclass
class IssueContentResult:
    """解析issue内容的结果"""

    dates: list[datetime] = field(default_factory=list)
    email: str = ''

    def get_tru_send_dates(self):
        """实际发送的数据时间列表"""
        return [
            dt
            for dt in est_no2_util.dt_ls
            if dt >= self.dates[0] and dt <= self.dates[1]
        ]

    @property
    def cover(self):
        """已有数据是否把查询时间全覆盖"""
        return (
            len(self.get_tru_send_dates())
            == (self.dates[1] - self.dates[0]) / timedelta(days=1) + 1
        )

    @property
    def tru_send_dates_bound_str(self) -> tuple[str, str]:
        """真实发送的数据首尾时间字符串元组，(start,end)"""
        if len(self.get_tru_send_dates()) == 0:
            return ('-', '-')
        return (
            time_util.dt2ymd(self.get_tru_send_dates()[0]),
            time_util.dt2ymd(self.get_tru_send_dates()[-1]),
        )


class Emailtool:
    def __init__(self) -> None:
        self.email = '911187207@qq.com'
        self.service_code = SecretConfig.email_service_code
        self.template: Template = Template(
            open(Path(SHARED_DIR, 'email_template.html'), 'r', encoding='utf-8').read()
        )

    def _prepare_data(self, param: IssueContentResult) -> BytesIO:
        """根据解析的issue内容参数找到est_no2的tif文件，并压缩

        Args:
            param (IssueContentResult): _description_

        Returns:
            zipfile.ZipFile: _description_
        """
        zip_buffer = BytesIO()
        zf = zipfile.ZipFile(zip_buffer, 'w', zipfile.ZIP_DEFLATED)
        for dt in param.get_tru_send_dates():
            path = path_util.get_yymd_path_under_est(['tif'], dt, extension='tif')
            if not path.exists():
                continue
            zf.write(path, arcname=path.name)
        zip_buffer.seek(0)
        return zip_buffer

    def send(self, issue_info: FetchIssueResult, content_info: IssueContentResult):
        """发送携带数据的邮件

        Args:
            issue_info (FetchIssueResult): _description_
            content_info (IssueContentResult): _description_
        """
        # 1. 构建邮件
        msg = MIMEMultipart()
        msg['From'] = self.email
        msg['To'] = content_info.email
        msg['Subject'] = '近地面NO2在线估算系统数据下载'
        msg.attach(
            MIMEText(
                self.template.render(
                    issue_time=f'UTC {issue_info.updated_at}',
                    issue_username=issue_info.username,
                    issue_content=issue_info.content,
                    issue_link=f"https://github.com/{SecretConfig.repo_full_name}/issues/{SecretConfig.issue_number}",
                    cover=content_info.cover,
                    available_start=available_start,
                    available_end=available_end,
                    start=content_info.tru_send_dates_bound_str[0],
                    end=content_info.tru_send_dates_bound_str[1],
                    repo_link='https://github.com/hfdy0935/no2_estimating_system',
                ),
                'html',
                'utf-8',
            )
        )
        # 2. 添加数据为附件
        zip_buffer = self._prepare_data(content_info)
        part = MIMEBase("application", "zip")
        part.set_payload(zip_buffer.getvalue())
        encoders.encode_base64(part)
        part.add_header('Content-Disposition', 'attachment; filename=data.zip')
        msg.attach(part)
        # 3. 发送
        # https://wx.mail.qq.com/list/readtemplate?name=app_intro.html#/agreement/authorizationCode
        server = smtplib.SMTP_SSL('smtp.qq.com', smtplib.SMTP_SSL_PORT)
        server.login(self.email, self.service_code)
        server.sendmail(self.email, content_info.email, msg.as_string())
        try:
            server.close()
        except:
            pass


class IssueTool:
    def __init__(self, target_issue_title: str):
        self.fetch_issue_url = f'https://api.github.com/repos/{SecretConfig.repo_full_name}/issues/{SecretConfig.issue_number}'
        self.reply_url = f'https://api.github.com/repos/{SecretConfig.repo_full_name}/issues/{SecretConfig.issue_number}/comments'
        self.close_url = f'https://api.github.com/repos/{SecretConfig.repo_full_name}/issues/{SecretConfig.issue_number}'
        self.target_issue_title = target_issue_title

    def fetch_issue_info(self):
        """请求issue信息"""
        resp = requests.get(self.fetch_issue_url, headers=headers)
        if resp.status_code != 200:
            return FetchIssueResult('rejected', '获取issue信息失败')
        _data = resp.json()
        # 过滤issue标题
        title = _data.get('title')
        if title != self.target_issue_title:
            return FetchIssueResult('ignore')
        return FetchIssueResult(
            status='fulfilled',
            msg=title,
            username=_data.get('user', {}).get('login'),
            updated_at=_data.get('updated_at'),
            content=_data.get('body'),
        )

    def reply(self, msg: str):
        resp = requests.post(
            self.reply_url,
            json={'body': f'**[自动回复]** {msg}'},
            headers=headers,
        )
        if resp.status_code >= 200 and resp.status_code < 300:
            log('回复成功')
        else:
            log('回复失败')

    def reply_no_data(self):
        """回复没有数据"""
        log(
            '没有符合时间范围的数据，直接回复',
        )
        self.reply(
            f'没有符合时间范围的数据，目前可获得的时间范围为：{available_start}-{available_end}'
        )

    def reply_process_error(self, e: Exception):
        """回复处理失败"""
        log(
            f'处理失败，{e.args}',
        )
        self.reply(f'流程执行失败，请确保issue格式符合要求，或稍后重试，或联系作者')

    def reply_fetch_fail(self):
        log(f'请求失败')
        self.reply('issue信息获取失败，请稍后重试或联系作者')

    def reply_success(self, msg: str):
        log(f'发送数据成功')
        self.reply(msg)

    def close(self):
        resp = requests.patch(self.close_url, headers=headers, json={'state': 'closed'})
        if resp.status_code == 200:
            log('关闭成功')
        else:
            log('关闭失败')


class IssueHandler:
    def __init__(self):
        # 请求数据的固定issue title
        self.target_issue_title = 'req_data'
        self.email_tool = Emailtool()
        self.issue_tool = IssueTool(self.target_issue_title)

    def _parse_issue_content(self, content: str) -> IssueContentResult:
        """解析请求的issue内容

        >>> Example
        20251218-20251220, xxx@qq.com
        20251218, xxx@qq.com
        """
        period, email = content.split(',')
        if '-' in period:
            start, end = period.split('-')
        else:
            start = period
            end = period
        return IssueContentResult(
            dates=[time_util.ymd2dt(start.strip()), time_util.ymd2dt(end.strip())],
            email=email.strip(),
        )

    def run(self):
        issue_info = self.issue_tool.fetch_issue_info()
        # 判断是否在白名单中
        if issue_info.username not in IssueUsernameWhiteList:
            log(f'非白名单用户，已忽略')
            self.issue_tool.reply('你不是白名单用户，暂无权限，请联系作者')
            return
        if issue_info.status == 'ignore':
            log(f'title非{self.target_issue_title}，已忽略')
            return
        if issue_info.status == 'rejected':
            self.issue_tool.reply_fetch_fail()
            return
        try:
            content_info = self._parse_issue_content(issue_info.content)
            if len(content_info.get_tru_send_dates()) == 0:
                self.issue_tool.reply_no_data()
                return
            self.email_tool.send(issue_info, content_info)
            cover_msg = f'{issue_info.username}你好，已将数据发送至指定邮箱~'
            not_cover_msg = f'{issue_info.username}你好，目前可获取数据的时间范围为：{available_start}-{available_end}，已将{content_info.tru_send_dates_bound_str[0]}-{content_info.tru_send_dates_bound_str[1]}的数据发送至指定邮箱~'
            self.issue_tool.reply_success(
                cover_msg if content_info.cover else not_cover_msg
            )
            self.issue_tool.close()
        except Exception as e:
            self.issue_tool.reply_process_error(e)


def handle_issue():
    handler = IssueHandler()
    handler.run()
