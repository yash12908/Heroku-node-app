const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/firstApi", (req, res) => {
  res.send("application is Running");
});

app.get("*", (req, res) => {
  res.send({
    message: "Application is Running But Api Not Found",
  });
});

app.listen(5001, () => {
  console.log("Application is Running On 5001 Port");
});
