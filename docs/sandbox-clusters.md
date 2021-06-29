---
id: sandbox-clusters
title: Sandbox Clusters
---

Sandbox clusters are single node clusters running on docker containers.

### Instructions

- Once you've created the workspace, its time to create your first cluster.
  Click on the Add Cluster as shown below.

![Sandbox cluster!](/img/docs/sandbox-cluster/sandbox-list.png "Sandbox cluster")

- Provide sandbox cluster details as per your requirement. Make sure you mount a
  directory your desktop on to the container running the cluster. This will
  enable for faster development and deployment.

![Create cluster!](/img/docs/sandbox-cluster/create-cluster.png "Create sandbox cluster")

- Click on the start button to initialize and run the cluster. Once the cluster
  has been started, you can view the resources allocated and the logs.

![Cluster state!](/img/docs/sandbox-cluster/cluster-state.png "Cluster state")

### Open Interactive Shell

Now that we have the cluster up and running, we can interact with the cluster by
opening an interacting shell from the terminal using the following command

```bash
docker exec -it <container-id> /bin/bash
```

In order to generate the command, click on the **Open Terminal** button, located
at right top side of the cluster dashboard. On clicking of that button, you will
be able to get the command to open interactive shell as shown below.

![Docker open terminal command!](/img/docs/sandbox-cluster/docker-cmd.png "Docker command")

### Interact with Spark and Hadoop

Once you've open the interactive shell for the cluster, you can run
`spark-shell` and `hdfs` commands to explore Spark and Hadoop respectively.

![Spark shell!](/img/docs/sandbox-cluster/spark-shell.png "Spark shell")

It's time to automate the deployment of Spark job from the Gigahex application.
Let's do it in the next section.
