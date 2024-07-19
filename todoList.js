const express = require ('express');
const mongoose = require('mongoose');
const passport=require('./auth.js')
const bodyParser= require('body-parser');
require('dotenv').config()

const app=express();
app.use(bodyParser.json());

app.use(passport.initialize());

const localAuth=passport.authenticate('local',{session:false} );
// app.get('/',localAuth,(req,res)=>{
app.get('/',(req,res)=>{
    res.send('Welcome to To do List')
});


const todoRoutes= require('./routes/todoRoutes.js')
app.use('/',todoRoutes)

app.listen(PORT,()=>{console.log('server running on port',PORT);})

