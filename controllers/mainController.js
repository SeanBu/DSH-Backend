const express = require("express");
const router = express.Router();
const { User, Reviews, Course } = require("../models");

router.get('/', (req, res) => {
    res.send("Dont swear here main controller");
});

module.exports = router;