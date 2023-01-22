//connection of express application with mongodb
const express = require("express");
const mongoose = require("mongoose");
mongoose.set('strictQuery',false);
//mongoose.set('bufferCommands',false);
// mongoose.connect('mongodb://localhost/loginPortal',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(()=> {
//     console.log(`connection successful`);
// }).catch((e)=>{
//     console.log(e);
// });
const uri = 'mongodb://localhost:27017/loginPortal';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}

const connectWithDB = () => {
    mongoose.connect(uri, options, (err, db) => {
      if (err) console.error(err);
      else console.log("database connection")
    })
}

connectWithDB();
