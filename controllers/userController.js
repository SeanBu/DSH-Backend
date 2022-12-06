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

module.exports = router;
