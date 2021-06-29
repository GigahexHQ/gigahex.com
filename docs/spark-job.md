---
id: spark-job
title: Spark Job
---

### Deploy Spark Job

In this section, we'll see how we can deploy spark job to the sandbox cluster we
created in the previous section.

### Instructions

- Navigate to the **Jobs** menu and click on **Deploy Job**
- Choose the **Spark** Job type
- Enter the **deployment ID**, and choose the cluster which we created in the
  previous section, or you can create another cluster by clicking on **Add
  Cluster** which will be the target cluster for the deployment.
- Clicking on **Next** button will land you on the Spark configuration page,
  where you can provide the application details.

  :::tip

  By default, the YARN cluster memory is set to 3GB and 3 CPU Cores. Therefore,
  set the minimum memory for executor and driver to make sure the YARN allocates
  the resources to the job. Setting a high resource may cause the application to
  stay in running state with no progress.

  :::

- Once the Spark application configuration has been saved, you can run the job
  by clicking on the **Deploy** button from the **Deployment** section.
- If the cluster is running, the Spark job will be triggered and you can view
  the logs by clicking on the **blue square** button. While the job is running,
  you can watch the Spark application progress from Overview and Logs tab.
