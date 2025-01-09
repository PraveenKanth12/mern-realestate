const express=require("express");
const router=express.Router();
const signingup=require("../Controllers/auth.controller.js");

router.post("/signup",signingup.signup)

module.exports=router;