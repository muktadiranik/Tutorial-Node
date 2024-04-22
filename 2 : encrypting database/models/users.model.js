const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); // Use bcrypt for secure password hashing

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

// Hash password before saving (middleware)
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(this.password, salt);
  this.password = hash;
  next();
});

module.exports.User = mongoose.model("User", userSchema);
