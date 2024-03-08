import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    sender:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
    },
    reciever:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
    },
    content:{
      type:String,
      required:true
    },
    createDate:{
      type:Date,
      default:Date.now
    },
    isRead:{
      type:Boolean,
      default:false
    },
    name:{
      type:String,
      required:true
    },
},{timestamps});
export const Message = mongoose.model("Notification", messageSchema);