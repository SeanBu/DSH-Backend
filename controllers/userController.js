//! ---------------------Importing Statements-----------------------
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
require("dotenv").config();

//! ------------------------Importing Models-------------------------
const { User } = require("../models");
const { createUserToken, requireToken } = require("../middleware/auth");

//test route
router.get("/", (req, res) => {
  res.send("Dont swear here main controller");
});

//! ---------------------User Show Route-----------------------
router.get("/:id", async (req, res, next) => {
  try{
    const showUser = await User.findById(req.params.id, 'tutorReviews').populate("tutorReviews");
    res.status(201).send(showUser);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
})

//! ---------------------Auth Register Route-----------------------
router.post("/register", async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(req.body.password, salt);
    const pwStore = req.body.password;
    req.body.password = passwordHash;
    console.log("Req: ", req.body);
    const newUser = await User.create(req.body);
    console.log("Testing: ", newUser);
    if (newUser) {
      req.body.password = pwStore;
      const authenticatedUserToken = createUserToken(req, newUser);
      res.status(201).json({
        user: newUser,
        isLoggedIn: true,
        token: authenticatedUserToken,
      });
    } else {
      res.status(400).json({ error: "Something went wrong" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
});

//! ---------------------Auth Login Route-----------------------
router.post("/login", async (req, res, next) => {
  try {
    const loggingUser = req.body.username;
    //! make sure that front-end is turned into JSON first
    const foundUser = await User.findOne({ username: loggingUser });
    const token = await createUserToken(req, foundUser);
    // console.log("created token:", token);
    res.status(200).json({ user: foundUser, isLoggedIn: true, token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

//! ---------------------Auth Logout Route-----------------------
router.get("/logout", requireToken, (req, res, next) => {
  try {
    const currentUser = req.user.username;
    console.log(currentUser);
    delete req.user;
    res.status(200).json({
      message: `${currentUser} currently logged out`,
      isLoggedIn: false,
      token: "",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

module.exports = router;
