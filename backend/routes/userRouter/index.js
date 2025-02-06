const express=require("express");
const router = express.Router();
const { signup }=require('./signup');
const { signin }= require('./signin');
const { filter }=require('./filter')
const { update }=require('./update')
const { User }=require('../../db');
const { authMiddleware } = require("../../middleware");

router.post("/signup",signup)
router.post("/signin",signin)
router.put("/update" ,authMiddleware, update)
router.get("/filter" ,filter)

module.exports=router;