const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
  username:{
    type:String,
    required:true,
    uniqure:true
  },
  email:{
    type:String,
    required:true,
    uniqure:true
  },
  password:{
    type:String,
    required:true,
  }
},{timestamps:true});


const User=mongoose.model('User',userSchema);//this has to be singular i.e.,User in userSchema

module.exports=User;