const mongoose = require("mongoose");

const goalSchema = mongoose.Schema({
  goals: { type: String, required: true },
});

const Goals = mongoose.model("Goal", goalSchema);

const creditSchema = mongoose.Schema({
  dailyCredits: { type: Number, required: false },
  totalCredits: { type: Number, required: false },
});

const Credits = mongoose.model("Credit", goalSchema);

module.exports = {
  Goals,
  Credits,
};
