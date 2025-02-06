
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://tahir:a%40FxvBBVg6C68g3@cluster0t1.ph8zx.mongodb.net/payment-app");

const userSchema=mongoose.Schema({
    username:String,
    password:String,
    firstName:String,
    lastName:String
})

 const accountSchema=mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    balance:{
        type:Number,
        default:0
    }
 })

const Account =mongoose.model("Account",accountSchema)
const User = mongoose.model("User",userSchema);

module.exports = {
    User,
    Account
};




