const { Credits } = require("../models/goalModel.js");

exports.getCredits = async (req, res) => {
  try {
    const credits = await Credits.find();
    res.send({ data: credits });
  } catch (err) {
    console.log("Failed to get Credits", err);
    res.status(400).send(err);
  }
};

exports.postCredits = async (req, res) => {
  try {
    const credits = new Credits(req.body);
    await credits.save();
    res.send({ data: credits });
  } catch (err) {
    console.log("Failed to post Credits", err);
    res.status(400).send(err);
  }
};

exports.patchUpTotalCredits = async (req, res) => {
  try {
    const target = await Credits.findById(req.params.id);
    Object.assign(target, req.body);
    target.save();
    res.send({ data: target });
  } catch (err) {
    console.log("Failed to patch Up target", err);
    res.status(404).send(err);
  }
};

exports.patchDownTotalCredits = async (req, res) => {
  try {
    const target = await Credits.findById(req.params.id);
    Object.assign(target, req.body);
    target.save();
    res.send({ data: target });
  } catch (err) {
    console.log("Failed to patch Down target", err);
    res.status(404).send(err);
  }
};
