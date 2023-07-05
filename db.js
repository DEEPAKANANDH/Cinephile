const mongoose=require('mongoose')
require('dotenv').config()

async function dbConnect() 
{
  try{
    await mongoose.connect(process.env.mongodb_url)
    console.log("Successfully connected to db")
  }catch(err){
    console.log(err)
  }
}
module.exports=dbConnect