const mongoose = require("mongoose");

const goalSchema = mongoose.Schema({
  goal1: { type: String, required: true },
  goal2: { type: String, required: false },
  goal3: { type: String, required: false },
  dailyScore: { type: Number, required: false },
  totalScore: { type: Number, required: false },
});

const Goals = mongoose.model("Goal", goalSchema);

module.exports = {
  Goals,
};
