import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
     name:{
       type:String,
       required:true
     },
     email: String,
     phoneNo: String,
     password:{
      type:String,
      required:true
    }, 
    friends:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Friend"
    },
    posts:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Friend"
    },
    profilePic:String,
    bio:String,
    createdAt:{
      type:Date,
      default:Date.now
    },
    
    
}, {timestamps:true});

export const User = mongoose.model('User', userSchema);

