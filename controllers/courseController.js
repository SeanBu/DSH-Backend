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
  } catch (err) {
    console.log(err);
    res.redirect("/404");
    res.status(400).json(err);
  }
});

//! --------------------------Show Route----------------------------
router.get("/:id", async (req, res, next) => {
  try {
  } catch (err) {
    console.log(err);
    res.redirect("/404");
    res.status(400).json(err);
  }
});

//! --------------------------Destroy Route---------------------------
router.delete("/:id", async (req, res, next) => {
  try {
  } catch (err) {
    console.log(err);
    res.redirect("/404");
    res.status(400).json(err);
  }
});

//! --------------------------Edit Route------------------------------
router.get("/:id/edit", async (req, res, next) => {
  try {
  } catch (err) {
    console.log(err);
    res.redirect("/404");
    res.status(400).json(err);
  }
});

//! --------------------------Update Route----------------------------
router.put("/:id", async (req, res, next) => {
  try {
  } catch (err) {
    console.log(err);
    res.redirect("/404");
    res.status(400).json(err);
  }
});

module.exports = router;
