import os
import dotenv

from src.types import Maybe


dotenv.load_dotenv()


class SecretConfig:
    gems_api_key: str = os.getenv('GEMS_API_KEY', '')
    gee_credentials: Maybe[str] = os.getenv('GEE_CREDENTIALS')
    # 本地才有，值为'' => False
    is_github_actions: bool = bool(os.getenv('IS_GITHUB_ACTIONS', True))
    # github相关
    github_token: str = os.getenv('GITHUB_TOKEN', '')
    issue_number: int = int(os.getenv('ISSUE_NUMBER', -1))
    repo_full_name: str = os.getenv('REPO_FULL_NAME', '')  # username/reponame
    # 邮箱service code
    email_service_code: str = os.getenv('EMAIL_SERVICE_CODE', '')
