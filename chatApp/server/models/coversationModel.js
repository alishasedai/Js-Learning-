const { profile, timeStamp } = require("console");
const mongoose = require("mongoose");
const { type } = require("os");

const messageSchema = mongoose.Schema({
    text : {
        type: String,
        default : "",
    },
    imageUrl :{
        type:String,
        default : ""
    },
    videoUrl : {
        type :String,
        default :""
    },
    seen: {
        type : Boolean,
        default :""
    }
},{
    timeStamp : true
})


const conversationSchema = mongoose.Schema(
  {
    sender: {
      type: mongoose.Types.Schema.ObjectId,
      required: true,
      ref: "User",
    },
    receiver: {
      type: mongoose.Types.Schema.ObjectId,
      required: true,
      ref: "User",
    },
    messages: [{
      type: mongoose.Types.Schema.ObjectId,
      
      ref: "Message",
    }],
  },
  {
    timeStamp: true,
  },
);

const messageModel = mongoose.model("Messaage",messageSchema);



const conversationModel = mongoose.model("Conversation",conversationSchema);
module.exports = {userModel,conversationModel}