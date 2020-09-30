var express = require("express");
var router = express.Router();
const user = require("../models/user");

router.put(
    "/",
    (req, res, next) => user.checkToken(req, res, next),
    (req, res) => user.updateReport(res, req.body)
);

module.exports = router;
