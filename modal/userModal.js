const mongoose = require("mongoose");

const userSchemea = mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("user",userSchemea);