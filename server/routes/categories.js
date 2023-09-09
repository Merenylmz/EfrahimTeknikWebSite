const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categories");

router.get("/", categoriesController.getCategories);

router.get("/:id", categoriesController.getCategoryById);

router.post("/", categoriesController.addCategory);

router.put("/:id", categoriesController.editCategory);

router.delete("/:id", categoriesController.deleteCategory);


module.exports = router;