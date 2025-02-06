const {Account} =require("../../db")

async function balance(req,res){
    const account = await Account.findOne({
        userId: req.userId
    })
    return res.json(account.balance)
}
module.exports={
    balance
}