//! ---------------------Importing Statements-----------------------
const express = require("express");
const router = express.Router();

require("dotenv").config();

//! ------------------------Importing Models-------------------------
const { User } = require("../models");

//test route
router.get("/", (req, res) => {
  res.send("Dont swear here main controller");
});

//! ---------------------User Profile Show Route-----------------------
router.get("/profile", async (req, res, next) => {
  try {
    const showUserProfile = await User.findById(req.params.id);
    res.status(201).send(showUserProfile);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
});

//! ---------------------User Review Show Route-----------------------
//TODO - need to figure out if we are getting the user that is logged in

router.get("/:id", async (req, res, next) => {
  try {
    const showUserReview = await User.findById(
      req.params.id,
      "tutorReviews"
    ).populate("tutorReviews");
    res.status(201).send(showUserReview);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
});

//! ---------------------User Info Update Route-----------------------
router.put("/:id/updateinfo", async (req, res) => {
  try {
    const updateUserInfo = await User.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(201).send("Successful!");
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
});

//! ---------------------User Skills Update Route-----------------------
router.put("/:id/updateskills", async (req, res) => {
  try {
    console.log(req.body);
    const updateUserSkills = await User.updateOne(
      { _id: req.params.id },
      {
        $push: { skills: { $each: req.body } },
      }
    );
    res.status(201).send("Successful!");
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
});

module.exports = router;
