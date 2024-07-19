const jsonString='{"name":"ajay", "age":"25" , "email":"demo@gmaill"}';
const jsonObj=JSON.parse(jsonString);
console.log(jsonObj.age);

const obj={
    name:"vikas",
    age:25,
    password:"pass@123"
}

const json=JSON.stringify(obj);
console.log(json);