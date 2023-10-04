const mongoose = require('mongoose')

const UserModel = mongoose.Schema(
    {
        NameUser: { type: String, required: true },
        email:{type:String,required:true},
        password:{type:String,required:true},
        pic:{type:String,default:"https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg"}
    },
    {timestamps:true}
)
const User = mongoose.model("User",UserModel)
module.exports=User