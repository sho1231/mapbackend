const mongoose = require('mongoose');
const PinSchema = new mongoose.Schema({
   username: {
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true,
        minlength:3,
        maxlength:50
    },
    
    desc:{
        type: String,
        required: true,
        minlength:3,
        maxlength:150
    },
    visit:{
        type:String,
        required:true,
        minlength:2
    },
    rating:{
        type: Number,
        required: true,
        minlength:0,
        maxlength:5
    },
    long:{
        type:Number,
        required: true,
    },
    lat:{
        type: Number,
        required: true
    },},
    {timestamps:true}
    );

module.exports=mongoose.model("pin",PinSchema);