from fastapi import Response, APIRouter, status

organize_router = APIRouter()

@organize_router.get('/')
def main():
    data = { "Organize Library": "data" }
    return data