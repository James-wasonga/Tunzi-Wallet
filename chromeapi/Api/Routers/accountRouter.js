const express = require("express");
const authController = require("../Controllers/authController");

const router = express.Router();

router.get("/allaccount", authController.allAccount);
router.post("/createaccount", authController.signUp);//

module.exports = router;

