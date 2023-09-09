const express = require("express");
const router = express.Router();

const isAdmin = require("../middleware/isAdmin");
const auth = require("../middleware/auth");
const usersController = require("../controllers/users");


router.post("/register", usersController.registerOperation);

router.post("/login", usersController.loginOperation);

router.put("/:id", [isAdmin, auth], usersController.getUserById);

//Forgot Password Operation
router.post("/forgotpassword", usersController.forgotpassword);

//New Password Operation
router.post("/newpassword/:token", usersController.newpassword);

module.exports = router;