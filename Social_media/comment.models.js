import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({

  description:{
    type:String,
    required:true
  },
  createtDate:{
    type:Date,
    default:Date.now
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  post:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Post"
  },

  
},{timepstamps});

export const Comment = mongoose.model("Comment", commentSchema);



