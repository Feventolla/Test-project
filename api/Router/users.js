require("dotenv").config();
const express = require("express");
const router = express.Router();
const User = require("../model/user");

//get all users
router.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//add new user
router.post("/api/users", async (req, res) => {
  const { firstname, lastname, age, gender, height } = req.body;

  if (!firstname || !lastname || !age || !gender || !height) {
    return res.status(400).json({ msg: "Please Provide all fields!" });
  }

  try {
    let user = await User.create({
      firstname,
      lastname,
      age,
      gender,
      height,
    });

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error.message);
  }
});

router.put("/api/users/:id", getuser, async (req, res) => {
  if (req.body.firstname != null) {
    res.user.firstname = req.body.firstname;
  }
  if (req.body.lastname != null) {
    res.user.lastname = req.body.lastname;
  }
  if (req.body.age != null) {
    res.user.age = req.body.age;
  }
  if (req.body.gender != null) {
    res.user.gender = req.body.gender;
  }
  if (req.body.height != null) {
    res.user.height = req.body.height;
  }
  try {
    const updateUser = await res.user.save();
    res.json(updateUser);
    // res.json(message: "user updated");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// delete a user
router.delete("/api/users/:id", getuser, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: "user deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//middleware
async function getuser(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      res.status(404).json({ message: "user not found for this id" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.user = user;
  next();
}
module.exports = router;
