// const mongoose = require("mongoose");
import mongoose from "mongoose";

const userScheme = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
},
username: {
    type: String,
    required: true,
    unique: true,
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
});

export  const User = mongoose.model("User", userScheme);
