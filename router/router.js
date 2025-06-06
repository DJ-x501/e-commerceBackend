const express = require("express");
const {getUser,createUser} = require("../controller/userController");
// const {createProduct,getAllProducts,getProductById,deleteProductById} = require("../controller/productController");


const router = express.Router();


//user Routes

router.post("/userLogin",createUser);
router.get("/userProfile",getUser);

//product Routes


module.exports = router;