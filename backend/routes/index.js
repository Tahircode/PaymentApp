const express=require("express");
const accountRouter=require("./accountRouter");
const authMiddelware =require("./../middleware")
const userRouter=require("./userRouter");
const router = express.Router();

router.use("/account",accountRouter);
router.use("/user",userRouter);

module.exports=router;



