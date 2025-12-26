from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict


class SecretConfig(BaseSettings):
    model_config = SettingsConfigDict(env_file='.env', env_file_encoding='utf-8')
    gems_api_key: str = Field(validation_alias='GEMS_API_KEY', default='foo')
    gee_credentials: str = Field(
        validation_alias='GEE_CREDENTIALS', default='persistent'
    )


secret_config = SecretConfig()
