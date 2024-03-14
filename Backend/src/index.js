import dotenv from 'dotenv'; 
import database from './db/database.js';
dotenv.config({ path:'./env'});


database()


 .then(()=>{
      app.listen( process.env.env.PORT || 5000, 
            ()=>{
                console.log(`Server is running on port ${process.env.env.PORT || 5000}`);
            }
        ) 
    }
 )
 .catch(
      (err)=>{
      console.log("Mongodb connection failed :" + err);

 });












// import mongoose from 'mongoose';
// import {DB_NAME} from './constants';   This is only for 1st approach.

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