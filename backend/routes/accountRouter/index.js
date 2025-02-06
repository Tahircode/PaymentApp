const express=require("express")
const {authmiddleware, authMiddleware}=require("./../../middleware")
const {balance} = require("./balance")
const {transfer}=require("./transfer")
const router=express.Router();

router.use(authMiddleware)
router.get("/balance",balance)
router.post("/transfer",transfer)

module.exports=router



