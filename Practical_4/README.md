# Practical 4: Install and Configure Jenkins for Continuous Integration

## Objective

The objective of this practical is to install and configure Jenkins for Continuous Integration (CI). Jenkins is connected to a GitHub repository and configured to automatically build projects whenever code changes occur.

---

## Tools Used

* Jenkins
* Git
* GitHub
* Visual Studio Code

---

## Steps Performed

### 1. Verify Jenkins Installation

Jenkins was accessed through:

http://localhost:8080

The Jenkins dashboard confirmed successful installation.

![Jenkins Dashboard](assets/jenkins-dashboard.png)

### 2. Create a Freestyle Project

A Jenkins Freestyle Project named `Practical_4_CI` was created.

![Project](assets/created-project.png)
### 3. Configure Git Repository

The GitHub repository URL was added under Source Code Management.

![Added Git repository](assets/added-github-repository.png)

### 4. Configure Build Trigger

GitHub hook trigger and SCM polling were configured to automatically detect repository changes.

![Build Tiger](assets/build-tigger.png)

### 5. Add Build Step

A shell command was added:

```bash
echo "Building Practical 4"
echo "CI Pipeline Running Successfully"
```

![Build Setup](assets/build-setup.png)

### 6. Execute Build

The project was built successfully using Jenkins.

![Execute Build](assets/successful-build.png)

### 7. Test Continuous Integration

Changes were pushed to GitHub and Jenkins automatically detected the changes and triggered a new build.

![Jenkins Test](assets/test-CI-jenkins.png)

---

## Build Output

```text
Building Practical 4
CI Pipeline Running Successfully
Finished: SUCCESS
```

---

## Outcome

Jenkins was successfully configured for Continuous Integration. The Jenkins job automatically built the project whenever changes were pushed to GitHub.

---

## Conclusion

Continuous Integration improves software development by automating builds and reducing manual effort. Jenkins provides a reliable platform for automating the build process and integrating code changes efficiently.
