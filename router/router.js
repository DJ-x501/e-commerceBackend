const express = require("express");
const {getUser,createUser} = require("../controller/userController");


const router = express.Router();


//user Routes

router.post("/userLogin",createUser);
router.get("/userProfile",getUser);

module.exports = router;