const { JsonWebTokenError } = require("jsonwebtoken");
const User = require("../modal/userModal");
const JWT = require("jsonwebtoken");


async function createUser(req,res){
    try{
        const {email,password} = req.body;
        //checking the email is not exist already or not
        if(!email||!password){
            return res.status(404).json({success:false,message:"enter email and password"});
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({success:false,message:"User already exist"});
        }

        const newUser = await User.create({
            email,password
        });
        // Genrating Token
        const token = JWT.sign(
            {email:newUser.email},
            process.env.JWT_SECRET,
            {expiresIn:"1h"}
        )
        res.status(200).json({success:true,message:"User Created successfully",data:newUser,auth_token:token});

    }catch(e){
        console.log(e.message);
        res.status(500).json({success:false,message:"Server Error"});
    }
};

async function getUser(req,res){
    try {
        const user = await User.findById(req.params.id)
        req.status(200).json({success:true,data :user});
    } catch (e) {
        console.log(e.message);
        req.send(400).json({
            success:false,
            message:"User not found",
        })
    }
};

module.exports = {getUser,createUser};