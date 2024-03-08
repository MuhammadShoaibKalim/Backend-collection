import express from 'express';
const userScehma = new mongoose.Schema({
  username:{
    type:String,
    required:true,
    lowercase:true,
    unique:true
  },
  email:{
    type:String,
    required:true,
    lowercase:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
    unique:true
  },
  phoneNo:{
    type:Number,
    required:true,
  },

}, { timesptamps:true});

export const User=mongoose.model("User", userScehma);