from fastapi import Response, APIRouter, status
from requests import Request, post

from config import SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_AUTH_SCOPES, SPOTIFY_REDIRECT_URI
from api.schemas.auth import SpotifyAuthCredentials

auth_router = APIRouter()

@auth_router.get('')
def main():
    data = { "Auth": "data" }
    return data

@auth_router.get('/spotify_creds', status_code=status.HTTP_200_OK)
def get_spotify_auth_credentials() -> SpotifyAuthCredentials:
    return {
        'client_id': SPOTIFY_CLIENT_ID,
        'client_secret': SPOTIFY_CLIENT_SECRET,
        'redirect_uri': SPOTIFY_REDIRECT_URI,
    }