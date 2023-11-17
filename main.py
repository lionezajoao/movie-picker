import uvicorn
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, FileResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates


app = FastAPI()
templates = Jinja2Templates(directory="templates")
app.mount("/static", StaticFiles(directory="static"), name="static")

movies = []

@app.get("/", response_class=HTMLResponse)
async def root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request, "movies": movies})

@app.get('/favicon.ico', include_in_schema=False)
async def favicon():
    return FileResponse("static/images/favicon.ico")


if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000, log_level="info")