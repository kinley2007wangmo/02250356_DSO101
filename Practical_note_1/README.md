#  SDLC and DevOps Notes

##  What is SDLC?

**SDLC (Software Development Life Cycle)** is a structured process used to design, develop, test, and maintain software applications.

### Common SDLC Models

*  Waterfall Model *(Traditional / Old Model)*
*  V-Shaped Model
*  Agile Model

---

##  Six Phases of SDLC

### 1. Planning

* Define project objectives.
* Identify resources, budget, and timeline.

### 2. Requirement Analysis

* Gather customer requirements.
* Analyze functional and non-functional requirements.

### 3. Designing

* Design system architecture.
* Create database and UI designs.

### 4. Development / Implementation

* Write the application code.
* Convert design into a working software product.

### 5. Testing

* Perform software testing.
* Identify and fix bugs before release.

### 6. Deployment & Maintenance

* Deploy the application to users.
* Maintain the software.
* Collect user feedback and provide updates.

---

##  Limitations of the Waterfall Model

* Difficult to return to previous phases once completed.
* Not flexible when requirements change.
* Changes become expensive in later stages.

---

## Agile Methodology

Agile is a modern software development methodology that focuses on:

* Flexibility
* Continuous improvement
* Faster delivery
* Customer collaboration
* Incremental development

---

## DevOps

DevOps combines **Development (Dev)** and **Operations (Ops)** to improve software delivery and deployment.

It mainly focuses on:

* Continuous Integration (CI)
* Continuous Delivery/Deployment (CD)
* Automation
* Collaboration between teams

> DevOps mainly comes into play during the deployment and maintenance stages of SDLC.

---

## Ansible

Ansible is an automation tool used to:

* Automate repetitive tasks
* Configure servers
* Manage multiple computers simultaneously
* Simplify infrastructure management

---

## Hypervisor

A **Hypervisor** is software that enables multiple virtual machines (VMs) to run on a single physical machine.

It provides virtualization support and efficiently manages hardware resources.

Examples:

* Oracle VirtualBox
* VMware

---

## Linux

Linux is widely used in DevOps because:

* It supports powerful command-line operations.
* It is lightweight and stable.
* Most servers and cloud platforms run on Linux.

> Docker heavily relies on Linux kernel features.

---

## Docker

Docker is a containerization platform used to package applications and their dependencies together.

It is commonly used in **CI/CD pipelines**.

### Docker Image

A Docker Image is:

* A blueprint or template
* Used to create Docker containers

### Docker Container

A Docker Container is:

* A running instance of a Docker image
* Isolated from the host system

### Docker Documentation

The official reference for Docker is **Docker Docs**.

---

## Nginx

Nginx is a:

* High-performance web server
* Reverse proxy server
* Load balancer

It is designed to efficiently handle a large number of concurrent client connections.

---

## Tools Mentioned

* Docker
* Linux
* Ubuntu
* VirtualBox
* Nginx
* Ansible
* CI/CD Tools

---

## Quick Summary

| Topic        | Description                                         |
| ------------ | --------------------------------------------------- |
| SDLC         | Process for software development                    |
| Waterfall    | Sequential and rigid development model              |
| Agile        | Flexible and iterative development model            |
| DevOps       | Combines development and operations with automation |
| Ansible      | Automation and configuration management tool        |
| Hypervisor   | Software that runs multiple virtual machines        |
| Linux        | Operating system widely used in DevOps              |
| Docker       | Containerization platform                           |
| Docker Image | Blueprint used to create containers                 |
| Nginx        | Web server and reverse proxy                        |
