const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const connectDB = require("./database/db.js");
const goalController = require("./controllers/goalController.js");

connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/goals", goalController.postGoal);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
