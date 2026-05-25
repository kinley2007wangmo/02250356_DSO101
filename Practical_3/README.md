# Docker Practical Notes

## Objective
The objective of this practical was to learn basic Docker commands such as:
- Viewing containers
- Pulling images
- Running containers
- Running containers in background mode
- Attaching to running containers
- Stopping containers

## Commands Performed
1. View All Containers
```
docker ps -a
```
### Explanation
- `docker ps` → shows running containers
- `-a` → shows all containers including stopped containers
2. Remove a Container
```
docker rm <CID>
```
### Explanation
- `rm` means remove
- `<CID>` means Container ID

Example:
```
docker rm a12bc34d
```
3. Run a Docker Image
```
docker run <image>
```
Example
```
docker run ubuntu
```
### Explanation
This command creates and starts a container using the Ubuntu image.

4. View Docker Images
```
docker images
```
### Explanation
Displays all downloaded Docker images available in the local system.

5. Run Ubuntu Container with Sleep Command
```
docker run ubuntu sh -c "sleep 5; exit 120"
```
### Explanation
- `sh -c` executes shell commands
- `sleep 5` pauses for 5 seconds
- `exit 120` exits the container with status code 120

6. Run Infinite Loop Container
```
docker run ubuntu sh -c "while true; do date; sleep 1; done"
```
### Explanation
- `while true` creates an infinite loop
- `date` prints current date and time
- `sleep 1` pauses for 1 second

### Stop the Container
Press:
```
Ctrl + C
```
to stop the running container.

7. Pull Docker Images

Pull Latest Alpine Image
```
docker pull alpine
```
Pull Specific Version
```
docker pull alpine:3.22
```
or
```
docker pull alpine:3.23
```
### Explanation
Downloads Docker images from Docker Hub.

8. Run Container in Detached Mode
```
docker run -d ubuntu sleep 1000
```
### Explanation
- `-d` means detached mode (background mode)
- Container runs without blocking the terminal

9. View Running Containers
```
docker ps
```
### Explanation
Shows only currently running containers.

10. Attach to Running Container
```
docker attach <CID>
```
Example
```
docker attach a12bc34d
```
### Explanation
Connects the terminal to a running container.

11. Stop Running Container

Open another terminal and run:
```
docker stop <CID>
```
### Explanation
Stops the running container using its Container ID.

## Key Concepts Learned
- Docker containers can be created from images.
- Containers can run in foreground or background mode.
- Docker images can be downloaded from Docker Hub.
- Containers can execute shell commands.
- Running containers can be attached and stopped.

## Conclusion
In this practical, we learned the fundamental Docker commands used for container management. We practiced creating containers, pulling images, running processes inside containers, and managing running containers using Docker CLI commands.