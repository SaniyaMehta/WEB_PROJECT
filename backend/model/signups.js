const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  list: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "List",
    },
  ],
});

const userModel = mongoose.model("signups", signupSchema);
module.exports = userModel;
