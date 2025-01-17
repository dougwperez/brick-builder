const mongoose = require("mongoose");

const goalSchema = mongoose.Schema({
  goals: String,
});

let Goals = mongoose.model("Goal", goalSchema);

const creditSchema = mongoose.Schema({
  //Use a patch request to set dailyCredits upon submittion of checkbox form. Use another path request at midnight to set
  //dailyCredits back to 0.
  dailyCredits: { type: Number, default: 0, required: true },
  //Increment on the front end, in the axios patch request. Increment upon submittion of checkbox form. Perhaps call this function upon succesful patch of daily credits.
  totalCredits: { type: Number, default: 1, required: true },
  newDay: { type: Boolean, default: true },
});

let Credits = mongoose.model("Credit", creditSchema);

module.exports = {
  Goals,
  Credits,
};
