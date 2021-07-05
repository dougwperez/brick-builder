const express = require("express");
const axios = require("axios");
const connectLivereload = require("connect-livereload");
var reload = require("reload");
const app = express();
// const port = 4000;
let port = process.env.PORT || 4000;
const path = require("path");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const connectDB = require("./database/db.js");
const goalController = require("./controllers/goalController.js");
const creditController = require("./controllers/creditController.js");

app.use(connectLivereload());

function patchToggleNewDayCredits(id) {
  id = "60e1deaea5cdd53d476579da";
  const NewDayObj = { newDay: true };
  axios
    .patch(`https://brickbuilder.herokuapp.com/credits/${id}`, NewDayObj)
    .then((response) => {
      // this.getCredits();
      // console.log(response);
    })
    .catch((error) => console.log(error, "ERROR AT patchToggleNewDayCredits"));
}

var CronJob = require("cron").CronJob;
var job = new CronJob(
  "* * * * *",
  function () {
    console.log("1 min");
    //Cron every 10 minute is */10 * * * *
    patchToggleNewDayCredits("60e1deaea5cdd53d476579da");
  },
  null,
  true,
  "America/Los_Angeles"
);
job.start();

app.use("/", express.static(path.join(__dirname, "../docs")));

dotenv.config();
connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//GOAL ROUTES
app.post("/goals", goalController.postGoal);
app.get("/goals", goalController.getGoals);
app.delete("/goals/:id", goalController.deleteGoal);

//CREDIT ROUTES
app.post("/credits", creditController.postCredits);
app.get("/credits", creditController.getCredits);
app.patch("/credits/:id", creditController.patchUpTotalCredits);
app.patch("/credits/:id", creditController.patchDownTotalCredits);
app.patch("/credits/:id", creditController.patchToggleNewDayCredits);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
