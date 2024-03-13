// import mongoose from 'mongoose';
// import {DB_NAME} from './constants';   This is only for 1st approach.
import dotenv from 'dotenv'; 
import database from './db/database.js';
// require('dotenv').config({path:'./env'});



dotenv.config({
  path:'./env'
});


database();

















/*
import express from 'express';
const app=express();
(  async () =>{
        try {
          await mongoose.connect(` ${process.env.MONGODB_URI}/ ${DB_NAME}`);
        app.on("error", (error)=>{
         console.log("error",error);
         throw error;
        })
        } catch (error) {
         console.log("Error:"+ error);
         throw error;
        }
   }
)()

*/