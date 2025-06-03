const express = require("express");
const app = express();
const cors = require('cors');
const path = require("path");
const connectDb = require("./db/db");
const products = require("./data/products");
require("dotenv").config();
const router = require("./router/router");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/assets", express.static(path.join(__dirname, "assets")));


// API Routes

app.use("/user",router);


const port = process.env.PORT;

app.listen(port, async function(req,res){
    await connectDb();
    console.log("server connected"+ " ",port);
})