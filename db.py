from motor.motor_asyncio import AsyncIOMotorClient

from config import MONGODB_URL

# Database
client = AsyncIOMotorClient()
db = client.musicmanagerdb

# Collections
USERS = db.users