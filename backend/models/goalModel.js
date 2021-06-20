const mongoose = require("mongoose");

const goalSchema = mongoose.Schema({
  goals: String,
});

let Goals = mongoose.model("Goal", goalSchema);

const creditSchema = mongoose.Schema({
  dailyCredits: Number,
  totalCredits: Number,
});

let Credits = mongoose.model("Credit", goalSchema);

module.exports = {
  Goals,
  Credits,
};
