const mongoose =require("mongoose");
const express =require('express');
const {db} =require('./db.js');
const path= require('path')
// import { Person } from "./content/person.model.cjs";
const staticRoute= require('./routes/staticRouter.js')
const app= express();
app.use(express.json());
const passport=require('passport')
const localStrategy=require('passport-local').Strategy;

app.set("view engine", "ejs")
app.set('views',path.resolve('./views'))


//middleware for logging
const logRequest=(req,res,next)=>{
    // const dt=new Date();
    console.log(`${new Date().toLocaleString()}  Request made to :${req.originalUrl}`);
    next();
}

// app.use(logRequest)
app.get('/',(req,res)=>{
   return  res.render('hotelHome')
})

const personRoutes= require('./routes/personRoutes.cjs')
 app.use('/person',personRoutes);

app.use('/person',staticRoute)

app.listen(3000,()=>{
    console.log('app is running on port 3000');
})