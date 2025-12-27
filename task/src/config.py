import os
import dotenv

from src.types import Maybe


dotenv.load_dotenv()


class SecretConfig:
    gems_api_key: str = os.getenv('GEMS_API_KEY', '')
    gee_credentials: Maybe[str] = os.getenv('GEE_CREDENTIALS')
