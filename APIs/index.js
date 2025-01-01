const express= require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();

const uri = "mongodb+srv://PraveenKanth:Praveen%40123@estateproject.uvogt.mongodb.net/?retryWrites=true&w=majority&appName=estateproject";

mongoose.connect(uri).then(()=>{
  console.log("DB Connected");
}).catch((err)=>{
  console.log(err);
})

const app=express();

app.listen(3000,()=>{
  console.log("Server is running on port 3000!!!!");
})