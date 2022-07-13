const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  fullName: { type: String, required: [true, "name is required"] },
  age: Number,
  email: {
    type: String,
    required: [true, "email is required"],
    lowercase: true,
  },
  password: String,
  createdOn: { type: Date, default: Date.now() },
  role: {
    type: String,
    enum: ["client", "admin", "superAdmin"],
    default: "client",
  },
  isBanned: { type: Boolean, default: false },
});
module.exports = User = mongoose.model("user", userSchema);
