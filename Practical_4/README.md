# Practical Work: Jenkins, Docker, and Python Pip Setup

## Aim
To learn the basics of:
- Jenkins setup using Docker
- Port mapping in Docker
- Understanding IP and MAC addresses
- Installing Python packages using Pip
- Running Flask installation commands

## Jenkins Introduction

### What is Jenkins?
Jenkins is a tool that automatically builds, tests, and delivers applications whenever code changes are made.

It helps developers automate tasks instead of doing them manually every time.

### Main Functions of Jenkins
- Build applications
- Run tests
- Deliver applications
- Automate CI/CD pipeline

## Important Networking Concepts

### IP Address
An IP Address helps identify a device location through the internet.

Example:
```
192.168.1.1
```
### MAC Address

A MAC Address is the hardware address of a device.

It does not change like an IP address may change.

## Installing Jenkins Using Docker
Step 1: Pull Jenkins Image
```
docker run jenkins/jenkins:lts
```
Step 2: Check Running Containers
```
docker ps
```
Step 3: Inspect Container
```
docker inspect <container_id>
```
Step 4: Stop Container
```
docker stop <container_id>
```

## Port Mapping in Docker

### What is Port Mapping?
Port mapping connects a port inside the container to a port on the local machine.

### Syntax
```
docker run -p host_port:container_port image_name
```
### Example
```
docker run -p 8080:8080 jenkins/jenkins:lts
```
This maps:
- Local machine port → 8080
- Jenkins container port → 8080

## Accessing Jenkins
After starting Jenkins, open the browser and visit:
```
http://localhost:8080
```

## Pip in Python

### What is Pip?
Pip is a package management tool for Python.

It is used to install and manage extra Python libraries and packages.

### Features of Pip
- Installs Python packages
- Manages libraries
- Similar to an app store for Python

## Installing Python Packages

### General Syntax
```
pip install package_name
```
## Installing Flask

### Command
```
python3 -m pip install flask
```
### Explanation
- `python3` → Runs Python 3
- `-m` → Runs a module
- `pip` → Python package installer
- `install flask` → Installs Flask library

## Task Performed
- Learned Jenkins basics
- Installed Jenkins using Docker
- Understood Docker port mapping
- Learned about IP and MAC addresses
- Learned Pip package management
- Installed Flask using Pip

## Conclusion

In this practical, Jenkins was installed using Docker, networking concepts were studied, and Python package installation using Pip was performed successfully. Flask library installation was also completed using the command line.