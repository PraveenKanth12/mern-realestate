const express= require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const userRouter=require("./Routes/user.route");
const authRouter=require("./Routes/auth.route");
dotenv.config();

const uri = "mongodb+srv://PraveenKanth:Praveen%40123@estateproject.uvogt.mongodb.net/?retryWrites=true&w=majority&appName=estateproject";

mongoose.connect(uri).then(()=>{
  console.log("DB Connected");
}).catch((err)=>{
  console.log(err);
})

const app=express();
app.use(express.json());//In order to use JSON by express, so that in the API testing we will get the data in the console.

app.listen(3000,()=>{
  console.log("Server is running on port 3000!!!!");
})

app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);

app.use((err,req,res,next)=>{
  const statusCode=err.statusCode || 500;
  const message=err.message || "Internal server error";
  return res.statu(statusCode).json({
    success:false,
    statusCode,
    message,
  })
})