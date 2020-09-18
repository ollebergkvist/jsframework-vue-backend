var express = require("express");
var router = express.Router();
const user = require("../models/user");

router.post(
    "/",
    (req, res, next) => user.checkToken(req, res, next),
    (req, res) => user.addReport(res, req.body)
);

module.exports = router;
