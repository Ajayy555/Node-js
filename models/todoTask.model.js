const mongoose= require('mongoose');



const todoSchema = new mongoose.Schema({   
    task:{
        type:Number,
        default:1,
    } ,
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    deadline:{
        type:Date,

    },
    isCompleted:{
        type:Boolean,
        default:false,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }

},{timestamps:true});

const Todo=new mongoose.model("Todo",todoSchema);

module.exports=Todo;
