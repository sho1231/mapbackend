const routes=require('express').Router();
const Pin=require('../models/Pin');

routes.post("/createpin",async(req,res)=>{
    const newPin=new Pin({...req.body});
    try{
        const savePin=await newPin.save();
        res.status(200).json(savePin);
    }
    catch(err){
        console.log("Post method of pin",err.message);
        res.status(500).json({message:err.message});
    }
});

//getting all the pins

routes.get("/getallpins",async function(req,res){
    try{
        const pins=await Pin.find();
        res.status(200).json(pins);

    }
    catch(err){
        res.status(500).json(err);
    }
})

module.exports=routes;