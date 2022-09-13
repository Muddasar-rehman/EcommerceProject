const express = require("express");
const adminController = require("../controller/admin");
const authValidDataMiddleware = require("../middleware/auth");

const router = express.Router();

router.post("/adminsignup", adminController.adminSignup);

router.post("/adminsignin", adminController.adminSignin);

module.exports = router;
