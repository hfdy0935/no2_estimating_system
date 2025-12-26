import os
import dotenv


dotenv.load_dotenv()


class SecretConfig:
    gems_api_key: str = os.getenv('GEMS_API_KEY', '')
    gee_credentials: str = os.getenv('GEE_CREDENTIALS', 'persistent')
