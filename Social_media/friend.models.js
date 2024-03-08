import mongoose from 'mongoose';

const friendSchema = new mongoose.Schema({
      user:{
          type:mongoose.Schema.Types.ObjectId,
          ref:"User" 
      },
      frined:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User" 
    },
      status:{
        enum:['PENDING','ACCEPTED', 'REJECTED'],
        default:'PENDING',
      },
      createdAt:{
        type: Date, 
        default: Date.now 
      },
},
{timestamps:true},

export const Friend = mongoose.model("Friend", friendSchema);