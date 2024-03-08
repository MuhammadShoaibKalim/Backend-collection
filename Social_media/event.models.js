import mongoose from 'mongoose';

const eventSchema = mongoose.Schema ({
     name:{
       type:String,
       required:true 
     },
     location:String,
       description:String,
       attendees:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"User"
       },
       date:Date,
      
},{timestamps:true});

export const Event = mongoose.model("Event", eventSchema);