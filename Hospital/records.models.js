import mongoose from 'mongoose';

const medicalRecordsSchema = mongoose.Schema({
    medication:{
      type:String,

    },
    doctor:{
       type: mongoose.Schema.Types.ObjectId,
       ref:"Doctor"
    },
    patient:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"Patient"
    }

},{timestamps:true});

export const MedicalReport = mongoose.model("MedicalReport", medicalRecordsSchema);
