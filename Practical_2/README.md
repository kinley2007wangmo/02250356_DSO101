# Docker Basics – Practical Notes

## Overview
This README contains basic Docker commands and practical usage examples. Docker is used to create, run, manage, and remove containers efficiently.

## Basic Docker Commands

### Run a container
```
docker run <image-name>
```
Starts a container from an image.

### List running containers
```
docker ps
```
Shows all currently running containers.

### List all containers
```
docker ps -a
```
Shows both running and stopped containers.

### Stop a container
```
docker stop <container-id or name>
```
### Remove a container
```
docker rm <container-id or name>
```
### List images
```
docker images
```
### Remove image
```
docker rmi <image-id>
```
### Pull image from Docker Hub
```
docker pull <image-name>
```
Example:
```
docker pull hello-world
```
### Interactive container (terminal access)
```
docker run -it <image-name> bash
```
Example:
```
docker run -it centos:7 bash
```
## Example Practice
Run Hello World
```
docker run hello-world
```
Run CentOS container
```
docker run centos:7
```
Check running containers:
```
docker ps
```
Run interactive shell:
```
docker run -it centos:7 bash
```
Inside container:
```
cat /etc/os-release
exit
```
### Run container in background (detached mode)
```
docker run -d centos:7 sleep 2000
```
Check running containers:
```
docker ps
```
### Stop container
```
docker stop <container-name>
```
### Remove container by ID or name
```
docker rm <container-id or name>
```
## Docker Daemon
Docker daemon runs in the background and manages:
* containers
* images
* networks
It is like the “backend engine” of Docker.

## Summary
* Docker helps in container management
    * `docker run` creates containers
    * `docker ps` checks running containers
    * `docker images` lists images
    * `docker rm` removes containers
    * `docker rmi` removes images

* To remove image we need to remove it container first
