# Docker Basic Commands and Practice

## Introduction

This practical covers the basic Docker commands used for creating, managing, and removing containers and images. It also demonstrates running containers in interactive and detached modes.

---

## Basic Docker Commands

### Run a Container

```bash
docker run <image-name>
```

Starts a new container from the specified image.

---

### List Running Containers

```bash
docker ps
```

Displays all currently running containers.

---

### List All Containers

```bash
docker ps -a
```

Displays both running and stopped containers.

---

### Stop a Container

```bash
docker stop <container-id or container-name>
```

Stops a running container.

---

### Remove a Container

```bash
docker rm <container-id or container-name>
```

Deletes a stopped container.

---

### List Available Images

```bash
docker images
```

Displays all Docker images stored locally.

---

### Remove an Image

```bash
docker rmi <image-id>
```

Deletes a Docker image.

> Note: A Docker image cannot be removed if it is being used by an existing container. Remove the container first.

---

### Pull an Image from Docker Hub

```bash
docker pull <image-name>
```

Example:

```bash
docker pull hello-world
```

Downloads an image from Docker Hub.

---

### Run a Container in Interactive Mode

```bash
docker run -it <image-name> bash
```

Example:

```bash
docker run -it centos:7 bash
```

The `-it` option opens an interactive terminal inside the container.

---

### Docker Daemon

The Docker daemon is the background service responsible for managing Docker containers, images, networks, and volumes. It acts as the backend engine of Docker.

---

## Practical Commands

## Running the Hello World Image

```bash
docker pull hello-world
docker run hello-world
```

---

### Running a CentOS Container

```bash
docker run centos:7
```

Check running containers:

```bash
docker ps
```

---

### Start an Interactive Shell

```bash
docker run -it centos:7 bash
```

View operating system information:

```bash
cat /etc/os-release
```

Exit the container:

```bash
exit
```

---

### Run a Container in Detached Mode

```bash
docker run -d centos:7 sleep 2000
```

The `-d` option runs the container in the background.

Verify the running container:

```bash
docker ps
```

---

### Stop the Detached Container

```bash
docker stop <container-name>
```

or

```bash
docker stop <container-id>
```

---

### Remove the Container

```bash
docker rm <container-name>
```

or

```bash
docker rm <container-id>
```

---

### Execute a Command Inside a Running Container

List all containers:

```bash
docker ps -a
```

Run a command inside the container:

```bash
docker exec <container-id> cat /etc/os-release
```

or

```bash
docker exec <container-name> cat /etc/os-release
```

---

## Important Notes

* `docker ps` shows only running containers.
* `docker ps -a` shows all containers, including stopped ones.
* A Docker image cannot be removed until all containers using it have been removed.
* Containers can be referenced using either their container ID or container name.
* Interactive mode (`-it`) allows direct terminal access to the container.
* Detached mode (`-d`) runs the container in the background.

---

# Conclusion

This practical introduced the fundamental Docker commands required for container management, including creating, listing, stopping, removing, and interacting with containers. It also demonstrated the use of interactive mode, detached mode, and executing commands inside running containers.
