from typing import Optional
from pydantic import BaseModel, Field

class CreateNewUser(BaseModel):
    user_id: str = Field(alias="userId")
    email: str
    username: str
    # Additional user settings fields here

class UpdateUser(BaseModel):
    user_id: str = Field(alias="userId")
    email: str
    username: str
    # Additional user settings fields here