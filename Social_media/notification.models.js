import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
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
export const Notification = mongoose.model("Notification", notificationSchema);