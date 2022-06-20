const mongoose=require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{
        required: true,
        unique: true,
        min:3,
        max:10,
        type:String
    },
    email:{
        type:String,
        required: true,
        max:15,
        unique:true
    },
    pass:{
        type:String,
        required: true,
    },
},
    {timestamps:true},
)
module.exports=mongoose.model("user",UserSchema)