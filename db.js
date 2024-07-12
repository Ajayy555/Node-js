const mongoose =require("mongoose");    
const express =require('express');
mongoose.connect('mongodb://localhost:27017/hotel');

 const db=mongoose.connection;

db.on('connected',()=>{
    console.log('Mogodb Connected');
})
db.on('error',()=>{
    console.log('Mogodb Connection error');
})
db.on('disconnected',()=>{
    console.log('Mogodb disConnected');
})

module.exports=db;