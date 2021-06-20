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

exports.getGoals = async (req, res) => {
  try {
    const goals = await Goals.find();
    res.send({ data: goals });
  } catch (err) {
    console.log("Failed to get Goal Data", err);
    res.status(400).send(err);
  }
};

exports.deleteGoal = async (req, res) => {
  try {
    const goal = await Goals.findById(req.params.id);
    await goal.remove();
    res.send({ data: true });
  } catch (err) {
    console.log("Failed to delete goal", err);
    res.status(404).send(err);
  }
};
