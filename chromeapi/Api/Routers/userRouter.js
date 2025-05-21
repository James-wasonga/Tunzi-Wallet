const express = require("express");

const authController = require("../Controllers/authController");
const router = express.Router();

router.get("/signup", authController.signUp);
router.post("/login", authController.login);

module.exports = router;

// This code defines an Express router for user authentication. It imports the necessary modules, creates a new router instance, and sets up two routes: one for signing up a new user and another for logging in an existing user. The corresponding controller methods are defined in the authController module. Finally, the router is exported for use in other parts of the application.