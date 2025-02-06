const { Account,User }=require("../../db")
const mongoose=require("mongoose")

async function transfer (req,res){
    const to=req.body.to;
    const sum=req.body.sum;
    const session=await mongoose.startSession();
    session.startTransaction()

    const toUser=await User.findOne({
        username:to
    }).session(session)
    // console.log(toUser)
    console.log(to)

    const toId=toUser._id;
    const toAccount=await Account.findOne({
        userId:toId
    }).session(session)
//  console.log("-->",req.userId);
const fromAccount=await Account.findOne({
    userId:req.userId //extract
}).session(session)
  console.log("usser ",req.userId);
 if(fromAccount.balance<sum || !fromAccount){
    await session.abortTransaction()
    return res.json({
        msg:"Insufficent balance",
        success:false
    })
 }

 if(!toAccount){
    await session.abortTransaction()
    return res.json({
        msg:"Invalid username selected",
        success:false
    })
 }

 await Account.updateOne(
    {userId:req.userId},
    {$inc : {
        balance : -sum
    }}
).session(session)

await Account.updateOne(
    {userId:toId},
    {$inc : {
        balance : sum
    }}
).session(session)

await session.commitTransaction();
res.json({
    msg:`${sum} amount transferred successfully`,
    success:true
})
alert("transaction completed");

}
module.exports={
    transfer
}