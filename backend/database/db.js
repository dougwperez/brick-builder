const mongoose = require("mongoose");
//mongodb+srv://van:Plugblue91@bricksdb.9seez.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// mongodb://localhost/brickdb

// const MONGODB_URI = process.env.MONGODB_URI;
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
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
