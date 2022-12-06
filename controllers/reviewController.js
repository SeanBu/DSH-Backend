//! ---------------------Importing Statements-----------------------
const express = require("express");
const router = express.Router();

//! ------------------------Importing Models------------------------
const { Reviews } = require("../models");

//! --------------------------Middleware-----------------------------

//! --------------------------New Route-----------------------------
router.get("/new", async (req, res, next) => {
  try {
    res.status(201).send("new route");
  } catch (err) {
    console.log(err);
    res.redirect("/404");
    res.status(400).json(err);
  }
});

//! --------------------------Create Route----------------------------
router.post("/new", async (req, res, next) => {
  try {
    const newReview = await Reviews.create(req.body);
    //
    //* need to push review id into user review array.  but what are we reviewing, user or course?
    //todo __I think user?
    res.status(201).send("Successful!");
  } catch (err) {
    console.log(err);
    res.redirect("/404");
    res.status(400).json(err);
  }
});

//! --------------------------Show Route----------------------------
router.get("/:id", async (req, res, next) => {
  try {
    const showReview = await Reviews.findById(req.params.id).populate("tutorReview").populate("studentReviewer");

    res.status(200).json(showReview);
  } catch (err) {
    console.log(err);
    res.redirect("/404");
    res.status(400).json(err);
  }
});

//! --------------------------Destroy Route---------------------------
router.delete("/:id", async (req, res, next) => {
  try {
    const deleteReview = await Reviews.findByIdAndDelete(req.params.id);

    res.status(200).json(deleteReview);
  } catch (err) {
    console.log(err);
    res.redirect("/404");
    res.status(400).json(err);
  }
});

//! --------------------------Edit Route------------------------------
router.get("/:id/edit", async (req, res, next) => {
  try {
    const editReview = await Reviews.findById(req.params.id);
    res.status(201).send("Successful!");
  } catch (err) {
    console.log(err);
    res.redirect("/404");
    res.status(400).json(err);
  }
});

//! --------------------------Update Route----------------------------
router.put("/:id", async (req, res, next) => {
  try {
    const updateReview = await Reviews.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(201).send("Successful!");
  } catch (err) {
    console.log(err);
    res.redirect("/404");
    res.status(400).json(err);
  }
});

module.exports = router;
