const {User} = require("../../db")

async function filter(req,res){

    const input = req.query.filter || "";
    console.log(input)

    const user = await User.find({
      username : input
    })
    
    res.json({
        user:user.map( (user, ke)=>({
            username : user.username,
            id : user._id,
            name: user.firstname+" "+user.lastname
         })
    )
    })
}
module.exports={
    filter
}