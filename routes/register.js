var express = require("express");
var router = express.Router();
var user = require("../models/user");

router.post("/", (req, res) => user.register(req.body, res));

module.exports = router;
