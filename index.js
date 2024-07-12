const mongoose =require("mongoose");
const express =require('express');
const {db} =require('./db.js');
// import { Person } from "./content/person.model.cjs";

const app= express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('welocme to my hotel');
})

const personRoutes= require('./routes/personRoutes.cjs')
 app.use('/person',personRoutes);



app.listen(3000,()=>{
    console.log('app is running on port 3000');
})