const express = require("express");
const {getUser,createUser} = require("../controller/userController");
const {getAllProducts,getProductById,deleteProductById} = require("../controller/productController");


const router = express.Router();


//user Routes

router.post("/userLogin",createUser);
router.get("/userProfile",getUser);

//product Routes
router.get("/products",getAllProducts);
router.get("/:id",getProductById);
router.delete("/:id/delete",deleteProductById);

module.exports = router;