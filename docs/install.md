---
id: installation
title: Installation
---

### Pre-requisite

:::caution

Gigahex is curently in alpha, available to experiment with Docker.

:::

Docker must be installed in your desktop or VM. Run the following command to get
up and running with Gigahex.

```bash
docker run --rm -it -p 9080:9080 \
  --name gigahex \
  -v gxdb:/var \
  -v gxbin:/usr/local \
  gigahex/gxc:0.1.0
```

Once the container is up and running, with the below logs, you can head over to
`http://localhost:9080` to start creating your first Spark cluster.

```bash
 ██████  ██  ██████   █████  ██   ██ ███████ ██   ██
██       ██ ██       ██   ██ ██   ██ ██       ██ ██
██   ███ ██ ██   ███ ███████ ███████ █████     ███
██    ██ ██ ██    ██ ██   ██ ██   ██ ██       ██ ██
 ██████  ██  ██████  ██   ██ ██   ██ ███████ ██   ██

 A platform to provision and manage Spark clusters.
> Initializing the Gigahex components
> Initialization completed
> Starting the Gigahex server
> Welcome to Gigahex! 👋
> Visit http://localhost:9080 to get started!
> username: admin, password: *******
```
