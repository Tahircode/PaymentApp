
const {User} = require("../../db");
const jwt=require("jsonwebtoken");
const JWT_SECRET=require("../../config");
async function signin (req,res){
    const {username,password} = req.body;

    const dbUser = await User.findOne({
        username:username,
        password:password
    })
    if(!dbUser){
        res.json({
            msg:"User doesnt Exist"
        })
    }
    const token = jwt.sign({
        userId: dbUser._id
    },JWT_SECRET);
    res.json({
        msg:"your account has been logged in",
        token:token
    })

}
module.exports ={
    signin
}