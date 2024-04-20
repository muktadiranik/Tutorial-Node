const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const encKey = process.env.ENC_KEY;
const sigKey = process.env.SIG_KEY;
usersSchema.plugin(encrypt, { secret: encKey, encryptedFields: ["password"] });

module.exports = mongoose.model("users", usersSchema);
