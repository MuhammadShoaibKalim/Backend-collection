import mongoose from 'mongoose';

const groupSchema = mongoose.Schema ({
     name:{
       type:String,
       required:true
     },
     description:String,
       memebers:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"User"
       },
     createdAt:{
       type:Date,
       default:Date.now
     },
},{timestamps:true});

export const Group = mongoose.model("Group", groupSchema);