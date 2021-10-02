from pydantic import BaseModel

# DB MODELS

class UserModel(BaseModel):
    user_id: str
    email: str
    username: str
    # Additional user settings here

