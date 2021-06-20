const { Credits } = require("../models/goalModel.js");

exports.getCredits = async (req, res) => {
  try {
    const credits = await Credits.find();
    res.send({ data: credits.dailyCredits });
  } catch (err) {
    console.log("Failed to get Credits", err);
    res.status(400).send(err);
  }
};
