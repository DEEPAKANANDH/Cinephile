const express=require('express')
const app=express()
const body_parser=require("body-parser")
const movierouter=require('../routes/movie_routes')
const userrouter=require('../routes/user_routes')
const dbConnect=require("../db")
const model=require('../models/movie_models')
require('dotenv').config()

app.use(express.static(__dirname+"/.."+"/views"))
app.use(express.static(__dirname+"/.."))
app.use(express.static(__dirname))
app.use(body_parser.urlencoded({extended:false}),body_parser.json())
dbConnect()

app.use('/auth',userrouter)
app.use('/api/imdb',movierouter)

app.listen(process.env.PORT,()=>{
    console.log("Server connected at port 3000")
})