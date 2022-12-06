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

//! ---------------------User Show Route-----------------------
router.get("/:id", async (req, res, next) => {
  try {
    const showUser = await User.findById(
      req.params.id,
      "tutorReviews"
    ).populate("tutorReviews");
    res.status(201).send(showUser);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
});

module.exports = router;
