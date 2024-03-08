import mongoose from 'mongoose';

const tagSchema = new mongoose.Schema({
  name:{
   type: String,
   required:true
  },
  post:{
 type:mongoose.Schema.Types.ObjectId,
    ref:"Post"
  }
},{timestamps});

export const Tag = mongoose.model("Tag", tagSchema);



