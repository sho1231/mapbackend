const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const userRoute=require("./Routes/users")
const pinRoute=require('./Routes/pins');
const cors=require('cors');



const app=express();

app.use(cors({
    origin:"*",
    credentials: true
}));
app.use(express.json());

dotenv.config();
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
}).then(()=>console.log("DB connected!!!"))
.catch((e)=>console.log("The error is:",e.message));

app.listen(process.env.PORT,()=>console.log(`Listening in port ${process.env.PORT}`));
app.use("/api/users",userRoute);
app.use("/api/pins",pinRoute);
app.get('/',(req,res)=>res.send("Server started......."));