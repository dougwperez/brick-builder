const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost/brickdb", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log("MONGO CONNECTED");
  } catch (error) {
    console.log("MONGO CONNECTION FAILED");
    process.exit(1);
  }
};

module.exports = connectDB;
