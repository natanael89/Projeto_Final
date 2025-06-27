from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import access_control, resources, dashboard

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3002"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(access_control.router)
app.include_router(resources.router)
app.include_router(dashboard.router)


@app.get("/")
async def root():
    return {"message": "API de Wayne Security está ativa!"}


# if __name__ == "__main__":
#     import uvicorn

#     uvicorn.run(app, host="0.0.0.0", port=8000)