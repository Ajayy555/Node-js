const express = require('express');
const mongoose= require('mongoose');
const {genToken,jwtAuthMiddleware} = require('./../jwt.js');
// const jwt=require('jsonwebtoken');

const User = require('./../content/todoUser.model.js');
const Todo = require('./../content/todoTask.model.js');
PORT =3535;
mongoURL="mongodb://localhost:27017/todoList";

const router=express.Router();

//database connection
mongoose.connect(mongoURL);
const db=mongoose.connection;
db.on('connected',()=>{console.log('Database connected');});
db.on('error',()=>{console.log('Error While connecting to Db');});
db.on('disconnected',()=>{console.log('Database disconnected');});

// fetchiing express in app




router.post('/signup',async(req,res)=>{
    try{
        const data = req.body;
        const newUser= new User(data);
        const response= await newUser.save();
        const payload={
            id:response._id,
            username:response.username
        }
        const token = genToken(payload,process.env.JWT_SECRET);
        console.log('user data saved sucessfully token: ',token);
        res.status(200).json({response:response,token:token});

    }catch(error){console.log(error,'error while saving User details');
        res.status(400).json({message:'error while saving user data'})
    }
})

//LOGIN ROUTE
router.post('/login',async(req,res)=>{
    try{
        const {username,password}=req.body;
        const user= await User.findOne({username:username})

        if(!user || !(await user.comparedPassword(password))){
            return res.status(401).json({error:'invalid username or password'});}
        
        //genToken
        const payload={
            id:user._id,
            username:user.username
        }
       
        const token=genToken(payload)
        console.log(token);
        res.json({token:token,payload:payload});


    }catch(err){console.log(err,'error while login');
        res.statu(401).json({errro:'error while login '})
    }
})



//Create new Todo task
router.post('/addTask',async(req,res)=>{
    try{
        let prevTask;
           // prevous task fetch
        
           const pdata = await Todo.find({}).sort({task :-1}).limit(1)
            if(pdata.length>0){
           prevTask= pdata[0].task 
           console.log(prevTask);
            }else{
                prevTask=0;
            }
           
        const data = req.body;
        const newTask= new Todo(data);
        
        newTask.task=prevTask+1
        console.log(newTask);
        console.log(prevTask);
        const response= await newTask.save();

        console.log('Task added sucessfully');
        res.status(200).json(response);

    }catch(error){console.log(error,'error while adding task');
        res.status(400).json({message:'error while adding task'})
    }
})
//View Todo list in order to their deadline 
router.get('/todoList',jwtAuthMiddleware,async(req,res)=>{

  try{
    const data=await Todo.find({}).sort({deadline:1});
    res.status(200).json(data)

  }catch(error){console.log(error,`error while fetching todo list`)
        res.status(400).json({error:`internal server error`})  
  }
})

//update Todo item
router.patch("/modifyTodo/:id",async(req,res)=>{
   try{
    const taskNo=req.params.id;

    const pdata = await Todo.find({task:taskNo})  //fetch id obj from task no.
    const taskIdObj=String( pdata[0]._id);

    const listItem=req.body;

    try{
        const response=await Todo.findByIdAndUpdate(taskIdObj,listItem,{new:true})
        if(!response){return res.status(404).json({message:'record not found '})}

        console.log('Todo list updated sucessfully');
        res.status(200).json({message:'ToDo Task Updated '})

    }catch(error){
        console.log(error,'record Not found to modify');
        res.status(400).json({message:'record not found to modify'})
    }



    
   }catch(error){console.log(error,"Inetrnal server error while fetching Todo list for update");
    res.status(400).json({message:'error while fetching todo list to update'})
   } 
})

// delete todo item 
router.delete("/modifyTodo/:id",async(req,res)=>{
   try{
    const taskNo=req.params.id;

    const pdata = await Todo.find({task:taskNo})  //fetch id obj from task no.
    const taskIdObj=String( pdata[0]._id);

    const listItem=req.body;

    try{
        const response=await Todo.findByIdAndDelete(taskIdObj,listItem,{new:true})
        if(!response){return res.status(404).json({message:'record not found '})}

        console.log('Todo Task Deleted sucessfully');
        res.status(200).json({message:'ToDo Task Deleted '})

    }catch(error){
        console.log(error,'record Not found to Delete');
        res.status(400).json({message:'record not found to delete'})
    }




   }catch(error){console.log(error,"Inetrnal server error while fetching Todo list for update");
    res.status(400).json({message:'error while fetching todo list to update'})
   } 
})


module.exports=router;