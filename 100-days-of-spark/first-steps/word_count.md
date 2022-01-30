---
id: setup-spark
title: Word count with Apache Spark
sidebar_label: Day 01 - First Program
---

### Hello World Program

Let's write our first program that counts the number of lines a file. We need to
create a file `hello.in` in your current working directory and read it from the
spark shell. Copy the following text and paste in your file.

```sh title="/Users/donald/hello.in"
Apache Spark™ is a multi-language engine
for executing data engineering, data science,
and machine learning on single-node machines or clusters.
Gigahex is a data platform that simplifies working
with open source distributed systems.
```

Now you can read the file using **Scala** APIs for Dataframe in Spark, as shown
below.

```bash
scala> val text = spark.read.textFile("/Users/donald/hello.in")
text: org.apache.spark.sql.Dataset[String] = [value: string]

scala> text.count()
res2: Long = 5
```

**Congratulations**! You've written your first Spark program in Scala.

The above program stores the Dataset in a variable `text` and once the action
`count` is called on the dataset, it Spark launches jobs to read and count all
the lines in that particular file.

### What is a Dataset?

Dataset is a representation of collection of objects, that can be of any type,
like String, Int, Long or any complex data type. This collection of distributed
objects can then be processed using different functional and relational
operations like - `filter`, `count`, `dropDuplicates` and many others.

### Count the words

Now that we've counted the total number of lines, let's count the total number
of words in the above file. In order to that, we would need to split the text
with `space` and generate collection of words. Once we have the collection of
words dataset, we can run a count on this, to get the total number of words.

Before we start writing the program, couple of things to keep in mind.

- Every dataset is strongly typed, which means that every object is of specific
  type that must be known to compiler in advance.
- Using implicit conversion in Spark, we can automatically infer the type using
  Encoder.
- With `import spark.implicits._`, we are able to get this encoder work for
  common data types like String.
- Using `flatMap` we are transforming each line, into a collection of words,
  thereby giving us a Dataset of words.

```sh
scala> import spark.implicits._
import spark.implicits._

scala> text.flatMap(x => x.split(" ")).count()
res1: Long = 33
```
