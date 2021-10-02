from fastapi import Response, APIRouter, status

update_router = APIRouter()

@update_router.get('/')
def main():
    data = { "Update Playlists": "data" }
    return data