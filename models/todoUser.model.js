const mongoose =require('mongoose');
const bcrypt=require('bcrypt');


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        lowercase:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }

},{timestamps:true});

userSchema.pre('save',async function(next){
    const user=this;
    if(!user.isModified('password')) return next();
    try{
        //salt generation
        const salt=await bcrypt.genSalt(10);
            //hash paswword

            const hashedPassword= await bcrypt.hash(user.password,salt);

            //overwrite password with hashed password
            user.password=hashedPassword;

        next();
    }catch(err){
        console.next(err);
    }
})
userSchema.methods.comparedPassword = async function(candidatePassword){
    try{
        const isMatch=await bcrypt.compare(candidatePassword,this.password)
        return isMatch  
        console.log(isMatch);
        
    }catch(err){ throw err;}

}

const User=new mongoose.model('User',userSchema);
module.exports=User;