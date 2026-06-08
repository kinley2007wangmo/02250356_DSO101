# Practical 1: Set Up a Docker Environment and Containerize a Simple Web Application

## Objective

To install Docker, create a simple web application, containerize it using Docker, and run it inside a Docker container.

---

## Prerequisites

* Docker Desktop Installed
* VS Code Installed
* Basic knowledge of terminal commands

---

## Project Structure

```text
Practical1/
│
├── index.html
└── Dockerfile
```

---

## Step 1: Create HTML File

Create an `index.html` file containing:

```html
<!DOCTYPE html>
<html>
<head>
    <title>DSO101 Practical 1</title>
</head>
<body>
    <h1>Hello Docker - Practical 1</h1>
</body>
</html>
```

---

## Step 2: Create Dockerfile

Create a file named `Dockerfile` containing:

```Dockerfile
FROM nginx:latest

COPY index.html /usr/share/nginx/html/index.html

EXPOSE 80
```

---

## Step 3: Build Docker Image

```bash
docker build -t practical_1 .
```
![Docker Build](assets/Successful%20Docker%20Build.png)

---

## Step 4: Run Docker Container

```bash
docker run -d -p 8081:80 practical_1
```

---

## Step 5: Verify Application

Open a browser and visit:

http://localhost:8081

Expected Output:

```text
Hello Docker - Practical 1
```
![Successful docker](assets/Successful%20docker%20.png)

---

## Commands Used

```bash
docker build -t practical1 .
docker run -d -p 8081:80 practical_1
docker ps
docker images
```

## Screenshots

Docker Dresktop running
![Docker running](assets/Docker%20Desktop%20running.png)

Docker Images
![Docker images](assets/Docker%20images.png)
---

## Conclusion

Docker was successfully installed and used to containerize a simple web application. The application was packaged into a Docker image and executed inside a container using Nginx.
