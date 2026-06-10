# Practical: Jenkins, Docker, and Python Pip

## Aim

The objective of this practical is to understand the basics of Jenkins, Docker port mapping, networking concepts such as IP and MAC addresses, and the use of Pip for installing Python packages.

---

## Jenkins

### Introduction

Jenkins is an automation server that automatically builds, tests, and delivers applications whenever changes are made to the source code. It eliminates the need to perform these tasks manually and is widely used in Continuous Integration and Continuous Deployment (CI/CD).

### Features of Jenkins

* Automates build and testing processes.
* Reduces manual effort during software development.
* Supports Continuous Integration (CI) and Continuous Deployment (CD).
* Integrates with various development and deployment tools.

---

## Networking Concepts

### IP Address

An IP (Internet Protocol) Address is used to identify the location of a device on a network or the internet. It allows devices to communicate with each other.

Example:

```text
192.168.1.10
```

### MAC Address

A MAC (Media Access Control) Address is the physical or hardware address assigned to a network interface card (NIC). Unlike an IP address, it is generally permanent and unique for every device.

---

## Installing Jenkins Using Docker

### Pull the Jenkins Image

```bash
docker pull jenkins/jenkins:lts
```

### Run the Jenkins Container

```bash
docker run -d -p 8080:8080 jenkins/jenkins:lts
```

### Check Running Containers

```bash
docker ps
```

### Inspect the Container

```bash
docker inspect <container_id>
```

### Stop the Container

```bash
docker stop <container_id>
```

---

## Docker Port Mapping

### What is Port Mapping?

Port mapping connects a port inside a Docker container to a port on the host machine, allowing external access to services running inside the container.

### Syntax

```bash
docker run -p <host_port>:<container_port> <image_name>
```

### Example

```bash
docker run -p 8080:8080 jenkins/jenkins:lts
```

In this example:

* Host Port: `8080`
* Container Port: `8080`

The Jenkins application can then be accessed through the browser using:

http://localhost:8080

---

## Python Pip

### What is Pip?

Pip is the package management tool for Python. It is used to install, upgrade, and manage external Python libraries and packages.

It can be thought of as an application store for Python modules.

### Main Uses of Pip

* Install Python packages.
* Update existing packages.
* Manage third-party libraries.
* Simplify dependency management.

---

## Installing Flask Using Pip

### Command

```bash
python3 -m pip install flask
```

### Explanation

* `python3` executes the Python 3 interpreter.
* `-m` runs a Python module as a script.
* `pip` is the package installer module.
* `install flask` downloads and installs the Flask framework.

---

## Practical Tasks Performed

* Studied the purpose and functionality of Jenkins.
* Learned how to install and run Jenkins using Docker.
* Understood Docker port mapping and its syntax.
* Explored the concepts of IP Address and MAC Address.
* Learned about the Python package manager (Pip).
* Installed the Flask package using Pip.

---

## Conclusion

This practical provided an introduction to Jenkins automation, Docker container management, and Python package installation using Pip. It also covered basic networking concepts and demonstrated how Docker port mapping enables access to services running inside containers.
