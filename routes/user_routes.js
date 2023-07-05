const express=require('express')
const router=express.Router()
const path=require('path')
const userschema=require("../models/user_models")

/*router.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','Sign_up.html'));
})
router.get('/signin',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','Sign_in.html'));
})*/
router.get("/home",(req,res)=>{
    res.sendFile(path.join(__dirname,"..","views","home.html"))
})
router.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"..","views","Sign_in.html"))
})
router.post('/signup_auth',(req,res)=>{
    async function add_details(){
        try{
            const {Username,Email,Password,Confirm_password}=req.body;
            const existingUser=await userschema.findOne({"Email":{$eq:Email}})
            if(existingUser){
                res.json({message:"exists"})
                return 
            }
            if(!(Password==Confirm_password)){
                res.json({message:false})
                return
            }
            else{
                await userschema.insertMany(req.body);
                res.json({message:true})
            }
        }
        catch(err){
            console.log(err)
        }
    }
    add_details()
})
router.post('/login_auth',(req,res)=>{
    console.log(req.body)
    async function check_details(){
        try{
            const {Email,Password}=req.body;
            const result=await userschema.findOne({$and:[{"Email":{$eq:Email}},{"Password":{$eq:Password}}]})
            if(!(result==null)){
                res.json({success:true})
            }
            else{
                res.json({sucess:false})
            }
        }
        catch(err){
            console.log(err)
        }
    }
    check_details();
})
module.exports=router;



