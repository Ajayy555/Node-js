const mongoose =require( "mongoose");

const personSchema = new mongoose.Schema({
    username:{
        type:String,
        required : true,
    },
    age:{
        type:Number,
        required : true,
    },
    work:{
        type:String,
        enum:["chef","waiter","manager"],
        // required:true,
    },
    mobile:{
        type:String,
        required : true,
        // unique:true

    },
    email:{
        type:String,
        required : true,
        unique:true
    },
    address:{
        type:String,
        required : true,
    },
    salary:{
        type:Number,
        required : true,
    },
    profilePic:{
        type:String,
    },password:{
        type:String,
        require:true
    }


},{timestamps:true});

 const Person = new mongoose.model('Person',personSchema);

 module.exports=Person;