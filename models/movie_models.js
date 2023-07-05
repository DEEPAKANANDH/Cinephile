const mongoose=require('mongoose')
const fs=require('fs');

const movie=mongoose.model('new_movies',new mongoose.Schema({ 
    name:{
        type:String,
        required:true
    },
    actor:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true
    },
    avatar: {
        type: Buffer, // casted to MongoDB's BSON type: binData
        required: true
    },
    Genres:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    embed:{
        type:String,
        required:true
    },
    download:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
}))

module.exports=movie;