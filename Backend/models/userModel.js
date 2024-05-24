const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    typeof: String,
    required: true,
  },
  email: {
    typeof: String,
    required: true,
    unique: true,
  },
  password: {
    typeof: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
