const express = require("express");
const AuthController = require("../controller/auth");

const router = express.Router();

router.post("/signup", AuthController.signup);
router.post("/signin", AuthController.signin);

module.exports = router;
