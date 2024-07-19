const express= require('express');
const path =require('path');
const bodyParser= require('body-parser');
const multer= require('multer');
const { log } = require('console');

const app= express();
const port =8000;

app.use(bodyParser.json());


app.set("view engine", "ejs");
app.set("views",path.resolve("./views"));


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './userProfiles')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, uniqueSuffix+ '-' + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

app.get("/",(req,res)=>{
    return res.render("fileUpload");
})


app.post("/upload",upload.single('profileImg'),(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    return res.redirect('/')
})

app.listen(port,()=>{
    console.log('server running on port 8000');
})