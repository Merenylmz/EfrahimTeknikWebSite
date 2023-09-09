const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const isAdmin = require("../middleware/isAdmin");


const productsController = require("../controllers/products");

//Get All
router.get("/", productsController.getAll);

//GetById
router.get("/:id", productsController.getProductById);

//GetByCategoryId
router.get("/cat/:categoryid", productsController.getProductByCategoryId)

//GetLimitsProducts
router.get("/limit/:number", productsController.getLimitedProducts);

// Create Operation
router.post("/", [auth, isAdmin], productsController.addProduct);

//Delete Operation 
router.delete("/:id", [auth, isAdmin], productsController.deleteProduct);

// Update Operation 
router.put("/:id", [auth, isAdmin], productsController.updateProduct);




module.exports = router;

