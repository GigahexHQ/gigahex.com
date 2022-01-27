---
id: setup-spark
title: Setup local Apache Spark
sidebar_label: Setup Spark
---

### Install Apache Spark

With Gigahex up and running, lets install Apache Spark and run our first
program. Click on the **Create Cluster** button to launch the cluster wizard, to
choose the latest Spark version that you want to install.

![Create cluster!](/img/spark/intro/spark-cluster-builder.png "Create spark cluster")

Click on **Save** button to proceed to the next screen, from where you can start
the cluster, as shown below.

![spark cluster!](/img/spark/intro/spark-cluster-view.png "Spark cluster")

On clicking of the **Start** button, with play icon, the platform will download
the spark package and setup in your local environment, ready to experiment with.

### Verify the Spark installation

Now you can start the `spark-shell` to execute **Scala** programs against the
standalone cluster.

```bash
$ spark-shell
22/01/27 16:37:27 WARN Utils: Your hostname, gigahex.local resolves to a loopback address: 127.0.0.1; using xx.xx.x.x instead (on interface en1)
22/01/27 16:37:27 WARN Utils: Set SPARK_LOCAL_IP if you need to bind to another address
Using Spark's default log4j profile: org/apache/spark/log4j-defaults.properties
Setting default log level to "WARN".
To adjust logging level use sc.setLogLevel(newLevel). For SparkR, use setLogLevel(newLevel).
22/01/27 16:37:31 WARN NativeCodeLoader: Unable to load native-hadoop library for your platform... using builtin-java classes where applicable
Spark context Web UI available at http://xxx.xx.x.x:4040
Spark context available as 'sc' (master = spark://0.0.0.0:7077, app id = app-20220127163732-0000).
Spark session available as 'spark'.
Welcome to
      ____              __
     / __/__  ___ _____/ /__
    _\ \/ _ \/ _ `/ __/  '_/
   /___/ .__/\_,_/_/ /_/\_\   version 3.2.0
      /_/

Using Scala version 2.12.15 (OpenJDK 64-Bit Server VM, Java 11.0.9.1)
Type in expressions to have them evaluated.
Type :help for more information.

scala>
```

If you want to use **Python** for running Spark programs, then execute the
`pyspark` command as shown below.

```bash
$ pyspark
Python 3.9.0 (default, Dec  6 2020, 20:20:21)
[Clang 11.0.0 (clang-1100.0.33.17)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
22/01/27 16:40:21 WARN Utils: Your hostname, gigahex.local resolves to a loopback address: 127.0.0.1; using xx.xx.xx.x instead (on interface en1)
22/01/27 16:40:21 WARN Utils: Set SPARK_LOCAL_IP if you need to bind to another address
Using Spark's default log4j profile: org/apache/spark/log4j-defaults.properties
Setting default log level to "WARN".
To adjust logging level use sc.setLogLevel(newLevel). For SparkR, use setLogLevel(newLevel).
22/01/27 16:40:21 WARN NativeCodeLoader: Unable to load native-hadoop library for your platform... using builtin-java classes where applicable
Welcome to
      ____              __
     / __/__  ___ _____/ /__
    _\ \/ _ \/ _ `/ __/  '_/
   /__ / .__/\_,_/_/ /_/\_\   version 3.2.0
      /_/

Using Python version 3.9.0 (default, Dec  6 2020 20:20:21)
Spark context Web UI available at http://xx.xx.xx.x:4040
Spark context available as 'sc' (master = spark://0.0.0.0:7077, app id = app-20220127164022-0001).
SparkSession available as 'spark'.
>>>
```
