let guidelines

if (process.env.NODE_ENV === "development") {
  guidelines = {
    label: "Guidelines (DEV ONLY)",
    type: "category",
    items: [
      {
        type: "category",
        label: "Templates",
        items: [],
      },
    ],
  }
}

module.exports = {
  spark_mastery: {
    Introduction: ["spark-intro", "get-started", "setup-spark"],
  },
}
