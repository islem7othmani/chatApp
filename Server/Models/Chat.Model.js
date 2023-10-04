const mongoose = require('mongoose');

const ChatModel = mongoose.Schema(
    {
        chatName :{type:String},
        isGroup:{type:Boolean},
        users:[
            {type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
        ],
        latestMessage:
            {type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
        
        groupAdmin:{type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        }
    
    },
    {timestamps:true}
)
const Chat = mongoose.model("Chat",ChatModel);
module.exports = Chat