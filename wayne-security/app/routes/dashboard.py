from fastapi import APIRouter
from app.database import db

router = APIRouter(prefix="/dashboard", tags=["Dashboard"])

@router.get("/stats")
def get_dashboard_stats():
    total_users = db.users.count_documents({})
    total_resources = db.resources.count_documents({})
    ativos = db.resources.count_documents({"status": "ativo"})
    return {
        "total_usuarios": total_users,
        "total_recursos": total_resources,
        "ativos": ativos
    }