const fs =require('fs');
const os = require('os');

// fs.writeFileSync('./test.txt','hey There welcome to thr node js World with sync fs')
fs.writeFile('./test.txt','hello node js world async fs',(err)=>{})
// fs.readFileSync('./test.txt')
/*
console.log('1');
const result =fs.readFileSync("./text.txt","utf8");
console.log(result);
console.log('2');
*/
// fs.appendFileSync('./text.txt',new Date().getDate().toLocaleString()+'\n');//append file

console.log('1');
fs.readFile("./text.txt","utf8",(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log(result);
    }
})
console.log('2');
fs.cpSync("./text.txt","./copytest.txt");  //copy file

fs.unlinkSync('./copytest.txt')             // delete file

// console.log(fs.statSync('./text.txt'));  // file stats

// fs.mkdirSync('my docs')  // mk directory
// fs.rmdirSync('my docs')     // remove dir

console.log('thread size : ',os.cpus.length);