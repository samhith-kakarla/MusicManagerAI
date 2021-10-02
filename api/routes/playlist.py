from fastapi import Response, APIRouter, status

playlist_router = APIRouter()

@playlist_router.get('/')
def main():
    data = { "Live Playlist Creator": "data" }
    return data