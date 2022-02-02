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
    Introduction: ["spark-intro", "get-started"],
    "First Steps": [
      "first-steps/setup-spark",
      "first-steps/write-to-file",
      "first-steps/package-spark-app",
    ],
  },
}
