const express=require('express')
const router=express.Router()
const path=require('path')
const movieschema=require("../models/movie_models")

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','screen.html'))
})
router.post('/movie_page',async (req,res)=>{
    const category=req.body.Category;
           try{
            switch(category){
                case "Bollyhood":
                    res.sendFile(path.join(__dirname,'/..','views','Bollyhood.html'))
                    break
                case "Hollyhood":
                    res.sendFile(path.join(__dirname,'/..','views','Hollyhood.html'))
                    break
                case "Tollyhood":
                    res.sendFile(path.join(__dirname,'/..','views','Tollyhood.html'))
                    break
                case "Kollyhood":
                    res.sendFile(path.join(__dirname,'/..','views','Kollyhood.html'))
                    break
                case "Mollyhood":
                    res.sendFile(path.join(__dirname,'/..','views','Mollyhood.html'))
                    break  
                default :
                   return
            }
        }
        catch(err){
            console.log("error occured")
        }
})
router.post('/find',(req,res)=>{
    const title=req.body.Title;
    async function get_query(){
       try{
            const data=await movieschema.find({name:{$eq:title}}).exec()
            res.send(JSON.stringify(data))
        }
        catch(e){
            console.log(e)
        }

    }
    get_query()
})
router.post('/add_movies',(req,res)=>{
    async function add_query(){
        try{
            const data=await movieschema.insertMany(req.body)
            console.log(res.send(data))
        }
        catch(e){
            console.log("error occured")
        }
    }
    add_query()
})
router.put('/update_movies/:name',(req,res)=>{
    async function update_query(){
        try{
            const data=await movieschema.updateMany({name:`${req.params.name}`},{$set:req.body})
            console.log(res.send(data))
        }
        catch(e){
            console.log("error occured")
        }
    }
    update_query()
})
router.delete('/delete_movies/:name',(req,res)=>{
    async function delete_query(){
        try{
            const data=await movieschema.deleteMany({name:`${req.params.name}`})
            console.log(res.send(data))
        }
        catch(e){
            console.log("error occured")
        }
    }
    delete_query()
})


module.exports=router;
