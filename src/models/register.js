const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({

    name1:{
        type:String,
        required: true
    },

    number:{
        type:Number,
        required: true,
        unique:true

    },
    email:{
        type:String,
        required: true
    },

    password:{
        type:String,
        required: true
    }


})

const Register = new mongoose.model("Register",employeeSchema);

module.exports = Register;