from typing import Optional
from pydantic import BaseModel

class SpotifyAuthCredentials(BaseModel):
    client_id: str
    client_secret: str
    redirect_uri: str