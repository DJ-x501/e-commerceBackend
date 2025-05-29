const express = require("express");
const app = express();


app.get("/",function(req,res){
    console.log("This is started");
});

app.listen(3000,function(req,res){
    console.log("server started");
});