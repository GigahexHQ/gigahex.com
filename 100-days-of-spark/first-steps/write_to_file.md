---
id: write-to-file
title: Save the output to a file
sidebar_label: Day 02 - Writing to a file
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
