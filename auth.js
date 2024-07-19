const passport=require('passport')
const LocalStrategy=require('passport-local').Strategy;
const User = require('./models/todoUser.model.js');



passport.use(new LocalStrategy(async(USERNAME,PASSWORD,done)=>{
    try{
        console.log('recieved credentials :',USERNAME,PASSWORD);
        const user=await User.findOne({username:USERNAME})  
        if(!user){
            console.log('user not found',user);
            return done(null , false ,{message:'Incorrect Username'})
        }

        const isPasswordMatch=await user.comparedPassword(PASSWORD);
        console.log(isPasswordMatch);
        if(isPasswordMatch){
            console.log('user  found');

            return done(null , user)
        }
        else{
            console.log('pass nahi milapassword not found');
            return done(null,false,{message:'incorrect password'})
        }

    }catch(error){return done(error);}


}))

module.exports=passport;