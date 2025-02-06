
const express=require("express");
const zod=require("zod");
const JWT_SECRET = require("../../config");
const { User }=require("../../db");
const { Account } = require("../../db")
const jwt=require("jsonwebtoken");
const router = express.Router();

const signupSchema = zod.object({
    firstname: zod.string(),
    lastname: zod.string(),
    username: zod.string(),
    password: zod.string(),

})
async function signup (req,res){
//   console.log("oii")
    const body =req.body;
    console.log(body)
    const {success}=signupSchema.safeParse(req.body);
    if(!success){
        return res.json({
            message:"Email already taken / Incorrect inputs"
        })
    }

    const existingUser = await User.findOne({
        username: req.body.username
    })
    if(existingUser){
        return res.json({
            msg:`${req.body.username} has already taken`
        })
    }
   const user = await User.create(body);
    await user.save();
   const newacc=await Account.create({
    userId: user._id,
    balance:10000
   })
    await newacc.save();
    const token=jwt.sign({
        userId: user._id
           },JWT_SECRET);
    console.log("new user created");

     res.json({
        msg:"User created Successfully",
        token: token
     })
}
module.exports ={
    signup
};

