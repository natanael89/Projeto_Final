from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from typing import List
from app.database import db
from app.auth import decode_token
from bson import ObjectId

router = APIRouter(prefix="/resources", tags=["Resources"])

class Resource(BaseModel):
    name: str
    type: str
    status: str

@router.post("/", dependencies=[Depends(decode_token)])
def create_resource(resource: Resource):
    inserted = db.resources.insert_one(resource.dict())
    return {"id": str(inserted.inserted_id)}

@router.get("/", dependencies=[Depends(decode_token)], response_model=List[Resource])
def list_resources():
    resources = db.resources.find()
    return [Resource(**r) for r in resources]

@router.get("/{resource_id}")
def get_resource(resource_id: str):
    resource = db.resources.find_one({"_id": ObjectId(resource_id)})
    if not resource:
        raise HTTPException(status_code=404, detail="Resource não encontrado")
    return Resource(**resource)

@router.put("/{resource_id}")
def update_resource(resource_id: str, resource: Resource):
    update = db.resources.update_one({"_id": ObjectId(resource_id)}, {"$set": resource.dict()})
    if update.matched_count == 0:
        raise HTTPException(status_code=404, detail="Resource não encontrado")
    return {"message": "Resource atualizado com sucesso"}

@router.delete("/{resource_id}")
def delete_resource(resource_id: str):
    delete = db.resources.delete_one({"_id": ObjectId(resource_id)})
    if delete.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Resource não encontrado")
    return {"message": "Resource deletado com sucesso"}