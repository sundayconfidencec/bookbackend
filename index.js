const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bookModal = require("./modals/book");
const accountRoute = require("./routes/account");
const bookRoute = require("./routes/book");
const userRoutes = require("./routes/user");
const cors = require("cors");

const server = express();
const handleError = (req,res,next)=>{
    console.log("Error page executed");
    next();
}




//using bodyparser to retrive information from our user and we are using json to get it in json format
server.use(bodyParser.json());
server.use(cors());

//routes
server.use(accountRoute);
server.use(bookRoute);
server.use(userRoutes);
server.get("*",handleError,(req,res)=>{res.send("404 page not found")})


mongoose.connect("mongodb+srv://bookStore:112233445566778899@cluster0.6e8egnx.mongodb.net/?retryWrites=true&w=majority",
{useNewUrlParser: true, useUnifiedTopology: true}).then(result =>{
    server.listen(8081,"localhost",()=>{console.log("server is ready")});

}).catch(err => console.log(err));