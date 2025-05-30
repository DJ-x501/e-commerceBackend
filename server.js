const express = require("express");
const app = express();
const cors = require('cors');
const path = require("path");
const connectDb = require("./db/db");
const products = require("./data/products");

app.use(cors());
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/assets", express.static(path.join(__dirname, "assets")));
connectDb();

app.get("/products",function(req,res){
    res.send(products);
});

app.listen(port,function(req,res){
    console.log("server connected"+ " ",port);
})