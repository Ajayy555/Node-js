const { log } = require("console");
const { argv } = require("process");

console.log(__dirname);
// console.log(__filename;
// __filename - file name
// require - function to use module
// module - info about current module
// process- info about env where  program being executed

// const num1=process.argv[1];
// const num2=process.argv[1];

// console.log(`Sum : ${num1+num2}`);

const age1 = [15,27,35,20.09,5,65,7,14,17,23];
const res=age1.filter((chkAge)=> {return chkAge<=18})
console.log(res);

const prompt=require('prompt-sync')();

// 
/*

let ticketprice=500;
const age = prompt(`Movie Ticket costs you ${ticketprice} Rs\nplease enter your age to get Discount :`);

if(age<18){
ticketprice=(ticketprice)-(ticketprice*0.20);
console.log(`Hurry Buddy You've got 20 % Discount \nyou have to pay now ${ticketprice} amount`);
}else if(age>=18 && age<65)
{
    console.log(`Hi Sir You've got 0 % Discount \nyou have to pay now ${ticketprice} amount`); 
}else if(age>=65){
    ticketprice=(ticketprice)-(ticketprice*0.30);
    console.log(`Hey Boss You've got 30 % Discount \nyou have to pay now ${ticketprice} amount`); 
}

*/

// Area of rectangle thru IIFE
/*
var l=prompt('Enter Lenth of Rectangle : ');
var b=prompt('Enter Lenth of Rectangle : ');

// const Area=()=> l*b;

// console.log(Area());
(()=>console.log(`Area of Rectangle ${l*b}`)
)();

*/

// 3 object and data store
/*
const Product={
    pName:["atta","daal","besan"],
    price:[320,160,90],
    inStock:[true,true,false],
}

Product.array.forEach(element => {
    console.log(element);
});

*/
//4 array guest list

let Guests =["Ajay", "Harsh", "Tannu" , "Isha" , "jitesh" , "Tanisha" ];

let chkGuest = prompt('Enter Guest Name to Check in Guest List: ');

const result = Guests.filter((guest)=> { //console.log(guest, chkGuest);
     return guest===chkGuest });

     if(!result){
       console.log("Guest Not Found In Guest List ");
     }else{
        console.log(`Hey ${result[0]} Welcome in the party`);
     }




