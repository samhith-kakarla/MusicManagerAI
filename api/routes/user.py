from fastapi import Response, APIRouter, status

from api.models.user import UserModel
from api.schemas.user import CreateNewUser, UpdateUser
from db import USERS

user_router = APIRouter()

@user_router.get('')
def main():
    data = { "User": "data" }
    return data

@user_router.get('/get_user', status_code=status.HTTP_200_OK)
async def getUserInfo(user_id: str) -> UserModel:
    user = await USERS.find_one({ "user_id": user_id })

    return UserModel.parse_obj(user)

@user_router.post('/create_user', status_code=status.HTTP_200_OK)
async def createNewUser(user: CreateNewUser) -> str:
    await USERS.insert_one({
        "user_id": user.user_id,
        "email": user.email,
        "username": user.username,
    })

    return user.user_id

@user_router.post('/update_user', status_code=status.HTTP_200_OK)
async def updateUser(user: UpdateUser) -> None:
    updates = {}

    if user.email != '':
        updates['email'] = user.email
    if user.username != '':
        updates['username'] = user.username

    if len(list(updates.keys()) > 0):
        await USERS.update_one({ "user_id": user.user_id }, { "$set": updates })

    return None

@user_router.delete('/delete_user', status_code=status.HTTP_200_OK)
async def deleteUser(user_id: str) -> bool:
    user = await USERS.find_one({ "user_id": user_id })

    if user:
        await USERS.delete_one({ "user_id": user_id })
        return True
    else:
        return False