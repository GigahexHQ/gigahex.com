---
id: get-started
title: Get Started
sidebar_label: Get Started
---

#### What is Apache Spark

Apache Spark is a distributed processing engine, which is actively developed in
open, and used in thousands of enterprises. Spark exposes powerful APIs in
multiple languages like - Scala, Java, Python, SQL and R to process large volume
of data. It can handle petabytes of data and even streaming data.

If you're getting impatient, then lets jump into installing Spark and writing
our first "Hello Spark" program.

### Install Gigahex Data Platform

For this guide, we will be using Gigahex Data Platform to install Apache Spark.
Gigahex is a free to use data plaftform that provides a simple interface to
install and manage different open source distributed systems like - Apache Spark
and Kafka.

### Install on MacOS

You can run Gigahex Data Platform on MacOS, using the following instructions.

- Install the dependencies - postgresql and Java 11 for the server.

```bash
brew install postgresql java11
```

- Install the Gigahex platform

```bash
curl -s https://packages.gigahex.com/mac.sh | bash
```

### Install on Windows

You can install Gigahex on Windows after enabling
[WSL2](https://docs.microsoft.com/en-us/windows/wsl/about). Follow the below
instructions to setup WSL2 and Ubuntu distro and install Gigahex.

- Install WSL 2. After installation, you would need to reboot your system to
  continue with the installation

  ```bash
  wsl --install -d Ubuntu
  ```

- On reboot, login to Ubuntu shell, setup your password and run the below
  command to install the dependencies - **postgresql** and **JRE 11**

```bash
sudo apt-get install postgresql postgresql-contrib default-jre
```

- Now with the dependencies installed, set up Gigahex Data platform

```bash
curl -s https://packages.gigahex.com/nix.sh | bash
```

### Install on Ubuntu

You can install Gigahex on Ubuntu as per the instructions below.

- Run the below command to install the dependencies - postgresql and Java
  Runtime 11

```bash
sudo apt-get install postgresql postgresql-contrib default-jre
```

- Now with the dependencies installed, set up Gigahex Data platform

```bash
curl -s https://packages.gigahex.com/nix.sh | bash
```

### Start Gigahex Data Platform

Once you've the setup ready, run the following command to start the services,
and use the admin credentials generated to login to the platform.

```bash
$ gxc start

 ██████  ██  ██████   █████  ██   ██ ███████ ██   ██
██       ██ ██       ██   ██ ██   ██ ██       ██ ██
██   ███ ██ ██   ███ ███████ ███████ █████     ███
██    ██ ██ ██    ██ ██   ██ ██   ██ ██       ██ ██
 ██████  ██  ██████  ██   ██ ██   ██ ███████ ██   ██

 Lightweight Data Platform powered by Open source technologies.

> Starting the Gigahex Data Platform
> Welcome to Gigahex! 👋
> username: admin, password: **********
> Visit http://localhost:9080 to get started!
```
