# Practical Work: Docker Basics and Docker Hub

## Aim
To learn the basics of Docker, create a Docker image, run a container, and push the Docker image to Docker Hub.

---

## Introduction

Docker is a platform used to develop, package, and deploy applications inside containers.  
Containers allow applications to run consistently across different environments.

This practical covers:

- Creating a simple web application
- Writing a Dockerfile
- Building a Docker image
- Running a Docker container
- Pushing the image to Docker Hub

---

## Docker Image vs Container

| Docker Image | Docker Container |
|---|---|
| Blueprint of the application | Running instance of the image |
| Read-only | Executable |
| Used to create containers | Runs the application |

---

## Steps Performed

1. Create Project Folder

Open terminal and create a new folder.

```bash
mkdir myapp
cd myapp
```
Explanation:

- `mkdir` creates a new folder
- `cd` moves into the folder

---

2. Create Python Web Application

Create a Python file named `app.py.`
```python
print("Welcome")
```
A simple Flask example:
```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
```

## Flask Framework
Flask is a lightweight Python web framework.

Features:
- Simple and easy to use
- Used for web applications
- Good for beginners

Install Flask:
```
pip install flask
```

## Dockerfile
A Dockerfile contains instructions to build a Docker image.

Create a file named:
```
Dockerfile
```
Example Dockerfile:
```
FROM python:3.10

WORKDIR /app

COPY . .

RUN pip install flask

CMD ["python", "app.py"]
```

## Docker Commands

### Build Docker Image
```
docker build -t flaskapp .
```
Explanation:
- `docker build` → builds image
- `-t` → tag/name of image
- `flaskapp` → image name
- `.` → current directory

### Check Docker Images
```
docker images
```
This command shows all available Docker images.

### Run Docker Container
```
docker run -p 5000:5000 flaskapp
```
Explanation:
- `docker run` → runs container
- `-p 5000:5000` → maps local port to container port

## Docker Flags
Flags are extra instructions added to commands.

Example:
```  
docker run -d flaskapp
```
- `-d` runs container in detached mode

Another example:
```
docker run -it ubuntu
```
- `-i` interactive
- `-t` terminal mode

## Docker Hub
Docker Hub is an online registry used to store and share Docker images.

Process:
```
Local Image → Tag with Username → Push to Docker Hub
```

## Push Docker Image to Docker Hub

### Step 1: Verify Image Exists
```
docker images
```
### Step 2: Tag the Image
```
docker tag flaskapp username/flaskapp
```
Explanation:
- `username` → Docker Hub username
- `flaskapp` → image name

### Step 3: Login to Docker Hub
```
docker login
```
Enter:
- Docker Hub username
- Password

### Step 4: Push the Image
```
docker push username/flaskapp
```
This uploads the image to Docker Hub.

## Pull Docker Image
To download image from Docker Hub:
```
docker pull username/flaskapp
```

## Workflow Summary
```
Create App
    ↓
Write Dockerfile
    ↓
Build Image
    ↓
Run Container
    ↓
Tag Image
    ↓
Push to Docker Hub
```

## Important Notes
- Dockerfile must be saved without extension
- Always run commands inside project directory
- Use correct port mapping
- Docker Hub account is required for pushing images

## Result
Successfully:
- Created a Python Flask application
- Built Docker image
- Ran Docker container
- Tagged Docker image
- Pushed image to Docker Hub

## Conclusion
This practical helped in understanding:
- Docker basics
- Docker images and containers
- Docker commands
- Dockerfile creation
- Docker Hub usage

Docker makes application deployment faster, portable, and consistent across systems.