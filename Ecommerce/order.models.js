import { timeStamp } from "console";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({}, {timestamps:true});

export const Order = mongoose.model("Order", userSchema);
                             






