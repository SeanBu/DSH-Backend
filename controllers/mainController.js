const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Dont swear here main controller");
});

module.exports = router;