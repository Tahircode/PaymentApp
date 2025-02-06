const zod=require("zod");

const userSchema=zod.object({
    firstname:zod.string(),
    lastname:zod.string(),
    username:zod.string(),
    password:zod.string()
})

const updateUserSchema=zod.object({
    firstname:zod.string(),
    lastname:zod.string(),
    username:zod.string(),
    password:zod.string()
})

module.exports={
    userSchema,
    updateUserSchema
}