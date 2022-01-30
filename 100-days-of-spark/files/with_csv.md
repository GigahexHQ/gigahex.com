---
id: spark-with-csv
title: Read and process CSV Files
sidebar_label: Day 02 - Analyse CSV Files
---

### Objective

Read and analyse a csv file containing sales data for a grocery store.

### Reading the CSV file

Copy the below data and write to a file named `orders.csv` and read the data
using spark.

```sh title="sales.csv"
order_id,item,price,quantity,sales_dt
1,Guava,10,2,2022-01-11
2,Rice,150,1,2022-01-12
3,Papaya,30,10,2022-01-12
4,Refine Oil,160,3,2022-01-12
5,Pulses,100,1,2022-01-13
6,Chips,50,4,2022-01-13
7,Biscuits,20,6,2022-01-13
8,Toothpaste,20,2,2022-01-14
9,Brinjal,25,2,2022-01-14
10,Chocolates,50,10,2022-01-14
```

Now, open the terminal and run `spark-shell` to launch the interactive REPL for
running Spark programs.

```
scala> val orders = spark.read.csv("/Users/gigahex/100days-spark/order.csv")
orders: org.apache.spark.sql.DataFrame = [_c0: string, _c1: string ... 3 more fields]
```

Let's get a sneek peek of the dataset read, using the shows command that takes a
parameter that defines the number of rows you want to fetch.

```
scala> orders.show(5)
+--------+----------+-----+--------+----------+
|     _c0|       _c1|  _c2|     _c3|       _c4|
+--------+----------+-----+--------+----------+
|order_id|      item|price|quantity|  sales_dt|
|       1|     Guava|   10|       2|2022-01-11|
|       2|      Rice|  150|       1|2022-01-12|
|       3|    Papaya|   30|      10|2022-01-12|
|       4|Refine Oil|  160|       3|2022-01-12|
+--------+----------+-----+--------+----------+
```

Now this gives weird column names as \_c0, \_c1 and even considers the header
names in the csv as a row. In order to fix this, let's change the read option
for this csv.

```
scala> val orders = spark.read.option("header",true).csv("/Users/gigahex/100days-spark/order.csv")
orders: org.apache.spark.sql.DataFrame = [order_id: string, item: string ... 3 more fields]

scala> orders.show(5)
+--------+----------+-----+--------+----------+
|order_id|      item|price|quantity|  sales_dt|
+--------+----------+-----+--------+----------+
|       1|     Guava|   10|       2|2022-01-11|
|       2|      Rice|  150|       1|2022-01-12|
|       3|    Papaya|   30|      10|2022-01-12|
|       4|Refine Oil|  160|       3|2022-01-12|
|       5|    Pulses|  100|       1|2022-01-13|
+--------+----------+-----+--------+----------+
only showing top 5 rows
```

### Get total orders on each day

Based on the given dataset, we will calculate the total orders the store
received.
