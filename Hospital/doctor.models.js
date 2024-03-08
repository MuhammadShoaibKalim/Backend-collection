import mongoose from 'mongoose';

const doctortSchema = new mongoose.Schema({
     name:{
       type:String,
       required:true, 
       Speciality: String,      
     },
    salary:{
      type:String,
      required:true,
    },
    experienceInYear:{
      type:Number,
      default:0
    },
    Qualification:{
      type:String,
      required:true,
    },
    worksInHospital:{
     [
       {
         type:mongoose.Schema.Types.ObjectId,
         ref:"Hospital",
       }
     ]
      
    },

    
},{timestamps:true});

export const Doctor = mongoose.model("Doctor", doctortSchema);

