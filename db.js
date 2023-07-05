const mongoose=require('mongoose')
require('dotenv').config()

async function dbConnect() 
{
  try{
    await mongoose.connect("mongodb+srv://Deepak05:Deepak2003@cluster0.isy87kr.mongodb.net/Cinephile?retryWrites=true&w=majority")
    console.log("Successfully connected to db")
  }catch(err){
    console.log(err)
  }
}
module.exports=dbConnect