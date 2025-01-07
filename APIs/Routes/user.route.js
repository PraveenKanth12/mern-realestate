const express=require("express");
const test=require("../Controllers/user.controller.js");
const router=express.Router();

router.get("/test",test.test)

module.exports=router;
