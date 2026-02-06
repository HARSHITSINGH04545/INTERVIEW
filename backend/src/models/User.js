import mongoose, { Mongoose } from "mongoose";

const userschema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        profileImage:{
            type:String,
            default:"",
        },
        clerkId: {
            type:String,
            required:true,
            unique:true,
        },

    },{
        timestamps:true
    }//to srore date and time related values inside databasse automatically..
)

const User=mongoose.model("User",userschema);
export default User;

