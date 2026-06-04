import os
import dotenv

from src.types import Maybe

dotenv.load_dotenv()


class SecretConfig:
    GEMS_API_KEY: str = os.getenv('GEMS_API_KEY', '')
    GEE_CREDENTIALS: Maybe[str] = os.getenv('GEE_CREDENTIALS')
    # 本地才有，值为'' => False
    IS_GITHUB_ACTIONS: bool = bool(os.getenv('IS_GITHUB_ACTIONS', True))
    # github相关
    GITHUB_TOKEN: str = os.getenv('GITHUB_TOKEN', '')
    ISSUE_NUMBER: int = int(os.getenv('ISSUE_NUMBER', -1))
    REPO_FULL_NAME: str = os.getenv('REPO_FULL_NAME', '')  # username/reponame
    # 邮箱
    EMAIL_SERVICE: str = os.getenv('EMAIL_SERVICE', '')
    EMAIL_SERVICE_CODE: str = os.getenv('EMAIL_SERVICE_CODE', '')
