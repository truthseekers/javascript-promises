const express = require("express");
const app = express();
const port = 3000;
const axios = require("axios").default;

app.get("/", (req, res) => {
  axios
    .get("https://dummy.restapiexample.com/api/v1/employees")
    .then(function (response) {
      console.log("response: ");
      console.log(response.data);
    });

  res.send("See the logs in the terminal!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
