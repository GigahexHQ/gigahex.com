---
id: write-to-file
title: Day 02 - Save output to a file
sidebar_label: Day 02 - Save to a file
---

### Objective

Filter all the words which are greater than two characters and write to a file
in a specified directory.

### Read and generate a dataset of words

We would be reading the file created in the last program, and generating the
list of words present in the text file.

```bash
scala> val text = spark.read.textFile("/Users/donald/hello.in")
text: org.apache.spark.sql.Dataset[String] = [value: string]

scala> import spark.implicits._
import spark.implicits._

scala> val words = text.flatMap(x => x.split(" "))
```

### Filter the words

Now that we have the list of all the words, lets filter all those words which
are greater than **two** characters. We are using `filter` method defined on the
dataset to apply the above constraint.

We store this dataframe in another variable `largeWords` and call `write` which
materializes the contents of the dataframe in a specific directory.

```bash
scala> val largeWords = words.filter(w => w.length > 2)
largeWords: org.apache.spark.sql.Dataset[String] = [value: string]

scala> largeWords.write.text("/path/to/large-words")
```

You can verify the output by going to directory mentioned above.

```
$ cat /path/to/large-words/*
Apache
Spark™
multi-language
engine
for
executing
data
engineering,
data
science,
and
...
```

### Transformations and actions

Spark exposes api like `filter` as shown above to define transformations based
on the business requirement, and once an action like `write` is executed, these
transformations are converted to into a DAG ( Direct Acyclic Graph). DAG is a
representation of how the execution of the entire job would happen. This takes
care of minimizing the data read and distributed across nodes, during shuffle
stage of any job.

### Understanding DAG

Let's view the DAG for the above Spark job.

- Navigate to the Gigahex dashboard, to view the cluster details.
- Navigate to the history tab, and click on the application id as shown below.
  ![app history!](/img/spark/first-steps/cluster-history.png "app history")
- You should be able to view the Spark UI, that shows the executors and a job
  with description as `text at <console>:27`. Click on the Job ID and you would
  be navigated to the Stages page, where you can view the DAG as shown below.
  ![dag!](/img/spark/first-steps/dag.png "dag stage")

The above diagram helps you to understand how your four lines of code was
transformed into a DAG to run in a single stage. Each Spark application is
composed of multiple jobs and each job consists of multiple stages, and each
stage wil consist of multiple tasks. For the program that we've written, the
application consists of a single job and a single stage.
