import mongoose, { Schema }  from 'mongoose';

const userSchema = new Schema({
    
    id: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        index: true
    },
    email: {
        type: String,
        required:  [true,"Password is required"],
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    avatar: {
        type: String, // cloudinary url
        required: true
    },
    coverImage: {
        type: String, // cloudinary url
        required: true
    },
    watchHistory: {
        id: {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    },
    fullName: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    refreshToke:{
        type:String
    }
}, {timestamps:true});

export const Users = mongoose.model("User", userSchema);

 
