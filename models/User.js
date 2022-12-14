const mongoose=require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{
        required: true,
        unique: true,
        minlength:3,
        type:String
    },
    email:{
        type:String,
        required: true,
        minglength:3,
        unique:true
    },
    pass:{
        type:String,
        required: true,
        minlength:3
    },
},
    {timestamps:true},
)
module.exports=mongoose.model("user",UserSchema)