import express, {Request, Response}  from 'express'
import cors from 'cors'
import {config}  from 'dotenv'


//dfefines
const app =  express()
const PORT = process.env.PORT || 5000

//loads env vars
config()
cors()

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// routes

//GET / 
app.get('/', (req:Request, res:Response)=>{
res.json({message:"Hello World"})
})


app.listen(PORT, ()=>console.log(`App running on port ${PORT}`))
