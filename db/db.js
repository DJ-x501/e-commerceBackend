const mongoose = require("mongoose");

async function connectDb(){
    try{
        await mongoose.connect("mongodb://localhost:27017");
        console.log("mongoDb connected successfully");
    }catch(error){
        console.log(error.message);
    }
};

module.exports =  connectDb;