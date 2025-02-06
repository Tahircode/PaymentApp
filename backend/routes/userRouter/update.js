const {User} =require("../../db");
const {updateUserSchema} = require("./../../zodSchema")

async function update(req,res){
    
    console.log("coming here")
    const {firstname,lastname,password}=req.body;
     
    if(updateUserSchema.safeParse(req.body).success){
        await User.updateOne({
            _id : req.userId
        },
        {
            firstname:firstname,
            lastname:lastname,
            password:password
        }
    )
    return res.json({
        msg:"Details updated successfully"
    })
    }
    return res.json({
        msg:"invalid inputs"
    })
}
module.exports={
    update
}