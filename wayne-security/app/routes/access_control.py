from fastapi  import APIRouter, HTTPException
from app.models import User
from app.auth import create_token, get_password_hash, verify_password
from app.database import db

router = APIRouter()

@router.post("/register")
def register(user: User):
    user.password = get_password_hash(user.password)
    db.users.insert_one(user.dict())
    return {"message": "User registered successfully"}

@router.post("/login")
def login(user: User):
    db_user = db.users.find_one({"username": user.username})
    if not db_user or not verify_password(user.password, db_user["password"]):
        raise HTTPException(status_code=400, detail="Invalid credentials")
    token = create_token({"sub": user.username, "role": db_user["role"]})
    return {"access_token": token}