const mongoose = require("mongoose");
const validator = require("validator");
const passportLocalMongoose = require("passport-local-mongoose");
var RegisterSchema = new mongoose.Schema({
  googleId: String,
  username: String,
  coutries: String,
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is not valid");
      }
    },
  },
  password: {
    type: String,
    minlength: [8, "password is at least 8"],
    required: [true, "password is required"],
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip: String,
  mobile: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isMobilePhone(value)) {
        throw new Error("it is not a phone");
      }
    },
  },
  password_token: String,
});
mongoose.set("useCreateIndex", true);
RegisterSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("Register", RegisterSchema);
