const mongoose = require("mongoose");
const { Schema } = mongoose;

const user = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

user.index({ email: 1 }, { unique: true });

module.exports = mongoose.model("User", user);