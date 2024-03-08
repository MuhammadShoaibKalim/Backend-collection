import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  content:{
    type:String,
    required:true
  },
  img: String,
  createtDate:{
    type:Date,
    default:Date.now
  },
  comment:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Comment"
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  like:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Like"
  },

  
},{timepstamps});

export const Post = mongoose.model("Post", postSchema);



