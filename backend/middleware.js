const JWT_SECRET = require("./config");
const jwt = require('jsonwebtoken')

const authMiddleware=(req,res,next)=>{
    const authHeader=req.headers.authorization;

    if(!authHeader){
        return res.status(403).json({
            msg: "Unauthorized access"
          })
        }
        try {
        const token=authHeader.split(' ')[1];
        // console.log(token)
            const decoded = jwt.verify(token,JWT_SECRET);
            console.log("decodede :  " , decoded)
            if(decoded.userId){
                req.userId=decoded.userId;//set
                next();
            }
             else{
                return res.status(403).json({
                    msg:"status 403"
                });
             } } catch(err){
            return res.status(403).json({msg:err});
        }
        
    }
    module.exports={
        authMiddleware
    }

