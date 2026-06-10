# Practical: Docker Basics and Dockerfile Structure

## Aim
To understand the structure of a Dockerfile and learn basic Docker commands for building and running containerized applications.

---

## Theory

Docker is a platform used to develop, ship, and run applications inside containers. Containers package an application with all its dependencies so it runs consistently in any environment.

A **Dockerfile** is a script that contains instructions to build a Docker image.

---

## Structure of a Dockerfile

A basic Dockerfile includes the following instructions:

```dockerfile
FROM <base-image>

WORKDIR /app

COPY <source> <destination>

RUN <install-dependencies>

EXPOSE <port>

CMD ["command", "argument"]
```

## Explanation of Instructions
- FROM → Defines the base image (e.g., `node`, `python`, `alpine`)
- WORKDIR → Sets the working directory inside the container
- COPY → Copies files from host machine to container
- RUN → Executes commands during image build (e.g., installing dependencies)
- EXPOSE → Opens a port for the application
- CMD → Runs the application when container starts

## Example Dockerfile (Node.js App)
``` dockerfile
FROM node:18

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8080

CMD ["npm", "start"]
```

## Base Image Concept
A base image is the starting point of a Docker image. It can be:
- node
- python
- ubuntu
- alpine (lightweight Linux)

Example:
```dockerfile
FROM python:3.9-slim
```
## Basic Docker Commands
1. Check Docker Images
```
docker images
```
2. List Running Containers
```
docker ps
```
3. List All Containers
```
docker ps -a
```
4. Search Base Images
```
docker search alpine
```
or
```
docker images | grep alpine
```

## Build and Run Docker Image

### Build Image
```
docker build -t webapp-color .
```
### Run Container
```
docker run -p 9090:9090 webapp-color
```
### Example Using Python Image
```
docker run -it python:3.8-slim
```
## Changing Base Image

You can modify the Dockerfile and rebuild:
```dockerfile
FROM python:3.8-alpine
```
Then rebuild:
```
docker build -t webapp-color .
```

## Result / Conclusion
- Learned how to write a Dockerfile
- Understood key Docker instructions (FROM, WORKDIR,  COPY, RUN, EXPOSE, CMD)
- Practiced building and running Docker images
- Understood how base images affect container environments

## Challenges Faced
- Understanding base image differences
- Remembering correct Docker commands
- Port mapping confusion during container run
