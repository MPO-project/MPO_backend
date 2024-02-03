const express = require("express");
const router = express.Router();
const {authRoutingFunction} = require("./userAuth.route");

authRoutingFunction(router);
module.exports = router;

