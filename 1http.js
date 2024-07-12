const http=require('http');
const fs=require('fs');
const url=require('url');

/*
const myserver= http.createServer((req , res)=>{
    if(req.url==='/favicon.ico') return res.end();
    const dt= new Date();
    myurl=url.parse(req.url,true);
    console.log(myurl);
    const log=`${dt.toLocaleString()}: New Request receieved from ${myurl.path}\n`;
    fs.appendFile('log.txt',log ,(err, data)=>{    
        switch(myurl.pathname){
            case "/":res.end("Home page");break;
            case "/about":
                const username=myurl.query.NM;
                res.end(`Hi, ${username}`);break;
            default:res.end("404 Page not Found");
        }
    })
    // console.log(req);
    // res.end("hello from server");
});


myserver.listen(8000,()=>console.log('server running over port 3000'));*/

const express =require('express');
const app=express();
app.get('/',(req,res)=>{
    return res.send('hello from homepage')
})
app.get('/about',(req,res)=>{
    myurl=url.parse(req.url,true);
const dt =new Date();
const log=`${dt.toLocaleString()}: New Request receieved from ${myurl.path}\n`;

fs.appendFile('log.txt',log ,(err, data)=>{ console.log('user Log saved'); 
    const user=myurl.query.username;
    return res.send(`hello ${user} from About`)
});
})

app.listen(8000,()=>console.log('server running over port 3000'));