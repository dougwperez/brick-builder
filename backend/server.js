const express = require("express");
const app = express();
const port = 4000;
const path = require("path");
const bodyParser = require("body-parser");
const connectDB = require("./database/db.js");
const goalController = require("./controllers/goalController.js");
const creditController = require("./controllers/creditController.js");

app.use("/", express.static(path.join(__dirname, "../docs")));

connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/goals", goalController.postGoal);
app.get("/goals", goalController.getGoalData);

app.get("/credits", creditController.getCredits);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});