import mongoose  from 'mongoose';

const videoSchema =  new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    }, 
    videoFile :{
        type:String,  //cloudinary url
        required:true
    },
    thumbnail:{
        type:String, //cloudinary url
        required:true
    },
    owner :{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    title:{
        type:String,  //cloudinary url
        required:true,

    },
    description :{
        type:String,   
        required:true,
    },
    duration :{
        type:Number,  
        required:true,
    },
    views:{
        type:Number,
        default:false
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    isCreated:{
        type:Date,
        required:true
    },
    isUpdated:{
        type:Date,
        required:true
    }

},{timestamps:true});

export const Video =mongoose.model('Video', videoSchema);


















},{timestamps:true});
export const video = mongoose.model("Video", videoSchema);