const mongoose=require('mongoose')

const user_schema=new mongoose.Schema({ 
    Username:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('users',user_schema)