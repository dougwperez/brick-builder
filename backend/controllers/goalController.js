const { Goals } = require("../models/goalModel.js");

exports.postGoal = async (req, res) => {
  try {
    //You can push to the current model
    console.log("POST Goal", req.body);
    const goal = new Goals(req.body);
    await goal.save();
    res.send({ data: goal });
  } catch (err) {
    console.log("Failed to post goal", err);
    res.status(400).send(err);
  }
};

exports.getGoalData = async (req, res) => {
  try {
    const goals = await Goals.find();
    res.send({ data: goals });
  } catch (err) {
    console.log("Failed to get Goal Data", err);
    res.status(400).send(err);
  }
};
