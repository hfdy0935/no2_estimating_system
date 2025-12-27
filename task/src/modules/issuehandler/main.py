from src.config import SecretConfig


class IssueHandler:
    def __init__(self) -> None:
        self.token = SecretConfig.github_token
        self.issue_num = SecretConfig.issue_number
        self.repo_full_name = SecretConfig.repo_full_name

    def fetch_issue_info(self): ...

    def reply(self): ...
