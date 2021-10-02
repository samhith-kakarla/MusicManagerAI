from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.routes.auth import auth_router
from api.routes.user import user_router
from api.routes.update import update_router
from api.routes.organize import organize_router
from api.routes.playlist import playlist_router


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:19001"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router, prefix="/auth", tags=["Authentication"])
app.include_router(user_router, prefix="/user", tags=["User"])
app.include_router(update_router, prefix="/update", tags=["Update Playlists"])
app.include_router(organize_router, prefix="/organize", tags=["Organize Library"])
app.include_router(playlist_router, prefix="/playlist", tags=["Playlist Creator"])


@app.get('/')
def home():
    return { "Data": "Test" }