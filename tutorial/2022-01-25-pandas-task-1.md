---
title: Pandas Task 1
author: Vishnu Balaji V B
featured: true
description: To retrieve the features satisfying a condition using Pandas.
image: /img/tutorial/shared/og-spark.png
---

### Objective

We will be performing the following task on the dataset "sales.csv".
- To find the **item** and **date** that has the maximum sales amount.

### About Pandas, Jupyter and Anaconda

###### Pandas
    Pandas is a library written for Python to perform data manipulation and analysis. It offers data structures and operations for manipulating numerical tables and time series.

###### Jupyter notebook
    The Jupyter Notebook is a web application for creating and sharing computational documents. It offers a simple, streamlined, document-centric experience.

###### Anaconda
    Anaconda is a distribution of Python and R for package management and deployment. The distribution includes data-science packages for easy installation and management.

### Environment set-up

- Download and install [Anaconda Individual Edition](https://www.anaconda.com/products/individual)
- Download and install [Visual Studio Code](https://code.visualstudio.com/)
- Open the Anaconda Prompt and create a new environment by performing the following command replacing *_giga_* with the name you want.<br>
    `conda create --name giga`
- To install pandas, perform `conda install pandas`
- Now, open VSCode and install the *Jupyter* extension from the marketplace. Create a new jupyter notebook by either creating a new .ipynb file in your workspace or by running the `Jupyter: Create New Jupyter Notebook` command from the Command Palette (Ctrl+Shift+P).
- Click on *Select Kernel* and choose the appropriate kernel that is of the same name as the conda environment you created.
- Try printing 'hello world' in python to verify if it runs properly.
- If it does then, great! You are now completely ready with the setup.

### Task-1
Below is the entire code for the task mentioned. Let's go through it line-by-line.
<Gist id="3f790593fd3a45a4f0898c27572430c7" />

- Pandas library is imported.
- read_csv() is used to read .csv files such as the `sales.csv` and is stored in data variable.
- The data variable is printed to view the contents of the file.
- The max `sales_amount` is found using max(). The output is compared using the equality operator with every single value in the `sales_amount` column to get a list of boolean values to easily retrieve the row that satisfies the condition.
- Since we need only item and date, we restrict it to those two columns and print the output.