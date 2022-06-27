const routes = require('express').Router();
const User=require('../models/User');
const bcrypt=require('bcrypt');

routes.post("/register",async(req,res)=>{
    try{
        const salt=await bcrypt.genSalt(10);
        const newUser=new User(req.body);
        console.log(newUser);
        const user=await newUser.save();
        const hashedPassword=await bcrypt.hash(newUser.pass,salt);
        newUser.pass=hashedPassword;
        await newUser.save();
        res.status(201).json(user._id);
    }
    catch(err){
        console.log("error from post method of register:",err.message);
        res.status(500).json(err);
    }
});

routes.post("/login",async(req,res)=>{
    try{
        const user=await User.findOne({username:req.body.username});
        !user&&res.status(400).json({message:"Username wrong"});
        //validating pass
        const validpass=await bcrypt.compare(
            req.body.pass,
            user.pass
        );
        !validpass&&res.status(400).json({message:"Password wrong"});
        res.status(200).json({_id:user.id,username:user.username});
    }
    catch(err){
        console.log("error from post method of login",err.message);
        res.status(500).json({message:err.message});
    }
})

module.exports=routes;