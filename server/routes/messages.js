const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messages");
const auth = require("../middleware/auth");
const isAdmin = require("../middleware/isAdmin");


router.get("/", [auth, isAdmin],messageController.getMessages);
router.post("/", messageController.addMessages);
router.delete("/:id", [auth, isAdmin], messageController.deleteMessage);

module.exports = router;