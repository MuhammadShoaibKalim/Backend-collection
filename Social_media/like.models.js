import mongoose from 'mongoose';

const likeScheam = new mongoose.Schema({
     post:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Post"
     },
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    },

},{timestamps});

export const Like = mongoose.model("Like", likeScheam);