//! ---------------------Importing Statements-----------------------
const express = require("express");
const router = express.Router();

//! ------------------------Importing Models------------------------
const { Course } = require("../models");

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
    const createCourse = await Course.create(req.body);
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
    const showCourse = await Course.findById(req.params.id);
    res.status(201).send("Successful!");
  } catch (err) {
    console.log(err);
    res.redirect("/404");
    res.status(400).json(err);
  }
});

//! --------------------------Destroy Route---------------------------
router.delete("/:id", async (req, res, next) => {
  try {
    const deleteCourse = await Course.findByIdAndDelete(req.params.id);
  } catch (err) {
    console.log(err);
    res.redirect("/404");
    res.status(400).json(err);
  }
});

//! --------------------------Edit Route------------------------------
router.get("/:id/edit", async (req, res, next) => {
  try {
    const editCourse = await Course.findById(req.params.id);
  } catch (err) {
    console.log(err);
    res.redirect("/404");
    res.status(400).json(err);
  }
});

//! --------------------------Update Route----------------------------
router.put("/:id", async (req, res, next) => {
  try {
    const updateCourse = await Course.findByIdAndUpdate(
      req.params.id,
      req.body
    );
  } catch (err) {
    console.log(err);
    res.redirect("/404");
    res.status(400).json(err);
  }
});

module.exports = router;
