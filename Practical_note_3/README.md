# Docker Practical 3 – Basic Docker Commands

## Aim

To understand and practice basic Docker commands for managing images and containers.

---

## 1. Display All Containers

```bash
docker ps -a
```

### Description

Displays all Docker containers, including both running and stopped containers.

---

## 2. Remove a Container

```bash
docker rm <Container_ID>
```

### Description

Removes a container from the local system using its Container ID.

Example:

```bash
docker rm 123abc456def
```

---

## 3. Run a Docker Image

```bash
docker run <image_name>
```

### Example

```bash
docker run ubuntu
```

### Description

Creates and starts a new container from the specified Docker image.

---

## 4. List Docker Images

```bash
docker images
```

### Description

Displays all Docker images available on the local machine.

---

## 5. Execute a Sleep Command Inside a Container

```bash
docker run ubuntu sh -c "sleep 5; exit 120"
```

### Description

Runs an Ubuntu container that sleeps for 5 seconds and then exits with status code `120`.

---

## 6. Execute an Infinite Loop

```bash
docker run ubuntu sh -c "while true; do date; sleep 1; done"
```

### Description

Runs a continuous loop that prints the current date and time every second.

To stop execution, press:

```text
Ctrl + C
```

---

## 7. Pull the Latest Alpine Image

```bash
docker pull alpine
```

### Description

Downloads the latest Alpine Linux image from Docker Hub.

---

## 8. Pull a Specific Alpine Version

```bash
docker pull alpine:3.22
```

or

```bash
docker pull alpine:3.23
```

### Description

Downloads a specific version of the Alpine image.

---

## 9. Run a Container in Detached Mode

```bash
docker run -d ubuntu sleep 1000
```

### Description

Starts an Ubuntu container in the background that executes the `sleep` command for 1000 seconds.

---

## 10. View Running Containers

```bash
docker ps
```

### Description

Displays only the containers that are currently running.

---

## 11. Attach to a Running Container

```bash
docker attach <Container_ID>
```

### Example

```bash
docker attach 123abc456def
```

### Description

Connects the current terminal to a running container.

---

## 12. Stop a Running Container

Open another terminal and execute:

```bash
docker stop <Container_ID>
```

### Description

Stops the specified running container gracefully.

---

## Key Learning Outcomes

* Learned how to list Docker containers and images.
* Practiced creating and running containers from Docker images.
* Understood foreground and detached execution modes.
* Pulled images from Docker Hub using the `docker pull` command.
* Executed shell commands inside containers.
* Attached to and stopped running containers using Docker commands.

---

## Conclusion

This practical introduced the fundamental Docker commands used for container management. It covered creating, running, inspecting, attaching, and stopping containers, as well as downloading images from Docker Hub. These commands provide the foundation for working effectively with Docker in software development and DevOps environments.
