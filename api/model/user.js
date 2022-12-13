const express = require("express");
const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Please Provide a firstname"],
  },
  lastname: {
    type: String,
    required: [true, "Please Provide a lastname"],
  },
  age: {
    type: Number,
    required: [true, "Please Provide an age"],
  },
  gender: {
    type: String,
    required: [true, "Please Provide gender"],
  },
  height: {
    type: Number,
    required: [true, "Please Provide height"],
  },
});

module.exports = mongoose.model("User", usersSchema);
