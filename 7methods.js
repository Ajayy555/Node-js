const express =require('express');
const app=express();
const fs= require('fs');
const users=require('./MOCK_DATA.json')
const PORT=8000;
app.use(express.urlencoded({extended:false}))  // middleware
// GET / Users - Show all users json and HTML
app.get('/api/users',(req,res)=>{
    return res.json(users);
})

app.get('/users',(req,res)=>{
    const html=`
    <ul> ${users.map(user=>`<li>${user.first_name}</li>`).join("")}`;
    res.send(html)
})




// PATCH /user/ID - EDIT user with id 
// DELETE/ user/ID - delete user with ID
// GET /user/ID - Get User with ID
/*
app.get('/api/users/:id',(req,res)=>{
    const id =Number( req.params.id);
    const user=users.find((user)=>user.id===id);
    return res.json(user)
})
    */

app.route('/api/users/:id')
.get((req,res)=>{
    const id =Number( req.params.id);
    const user=users.find((user)=>user.id===id);
    return res.json(user)
})
.patch((req,res)=>{
    const id =Number( req.params.id);
    const user =users.find((user)=>user.id===id)
    const index=users.indexOf(user);
    console.log(index);
    Object.assign
    user.first_name='vikram'
   
    res.json(user)
})
.delete((req,res)=>{

})

// POST /user - Create user

app.post('/api/users',(req,res)=>{
    const body=req.body;
        users.push({...body,id:users.length+1});
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        // if(data) {console.log(users)};
        return res.json("done");
    })  
    // return res.json('pending')
})



app.listen(PORT,()=>{
    console.log(   `server running on port ${PORT}` );
})
