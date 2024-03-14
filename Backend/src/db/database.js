import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../constants.js";


const dbConection = async () =>{
    try {

        const connectedInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
         console.log(`\n Mongodb is connected !!  Host : ${connectedInstance.connection.host}`); 
        
    } catch (error) {
         console.log("Error is in mongodb:" + error);
         process.exit(1); 
    }
}

export default dbConection;