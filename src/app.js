const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
//const mongoose = require("mongoose");
//import mongoose from 'mongoose';

require("./db/conn");
const Register= require("./models/register");
const { json } = require("express");
app.use(express.json());
const port = process.env.PORT || 3000;
   
const static_path = path.join(__dirname, "../public")

// console.log(path.join(__dirname, "../public"));
const template_path = path.join(__dirname ,"../templates/views");
const partials_path = path.join(__dirname ,"../templates/partials");

app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/",(req ,res)=>{
    res.render("index")
} );

app.get("/register",(req ,res)=>{
    res.render("register");
})

app.get("/login", (req , res)=>{
    res.render("login");
})

app.post("/register", async(req ,res)=>{
    try{
        const registerEmployee = new Register({
            name1: req.body.name1,
            number: req.body.number,
            email:req.body.email,
            password:req.body.password
        })

        const registered = await registerEmployee.save();
        
        res.status(201).render("index");
// console.log(req.body.name1);
// res.send(req.body.name1);
    }catch(error){
        res.status(400).send(error);
    }
})
//login post

app.post("/login", async(req , res)=>{
     try {
        const email = req.body.email;
        const password = req.body.password;

       const useremail = await Register.findOne({email:email});
      // console.log(`${email} and password is ${password}`)
    //   res.send(useremail);
    //   console.log(useremail);
    if(useremail.password == password){
        res.status(201).render("index");
        res.send("You are good to go")
    }else{

        res.send("password are not matching"); 
    }
        

     } catch (error) {
        res.status(400).send("Invalid email")
        
     }
})



app.listen(port , ()=> {
    console.log(`server is running at port no ${port}`);
})