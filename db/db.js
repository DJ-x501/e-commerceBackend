const mongoose = require("mongoose");
require('dotenv').config();
async function connectDb(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongoDb connected successfully");
    }catch(error){
        console.log(error.message);
    }
};

module.exports =  connectDb;