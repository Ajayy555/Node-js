
const jwt=require('jsonwebtoken');

const jwtAuthMiddleware =async (req,res,next)=>{

    //  const authorization=req.headers.authorization;
    //  if(!authorization) return next();

    //extract jwt from request header
   try{
    const token=req.headers.authorization.split(' ')[1];
   
    if(!token) return res.status(404).json({err:'Token notfound'})
    
        try{
            //verify jwt
            const decoded = await jwt.verify(token,process.env.JWT_SECRET);
            
            //attch user info to the request obj
            req.user=decoded;
            next();
        }catch(error){
            console.log('token : ',token,error);
            res.status(401).json({error:'invalid token'})
        }
    }catch(err){console.log('invalid token');}
}

//gen tocken

const genToken=(userData)=>{

    return jwt.sign(userData,process.env.JWT_SECRET,{expiresIn:500});
}

module.exports={genToken,jwtAuthMiddleware}