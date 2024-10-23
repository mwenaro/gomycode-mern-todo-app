import express, {Request, Response}  from 'express'
import cors from 'cors'
import {config}  from 'dotenv'
import { dbConnect } from './db/dbconnect'
import { todoRouter } from './routes/todos'



//dfefines
const app =  express()
const PORT = process.env.PORT || 5000

//loads env vars
config()
cors()

//cal db connect
dbConnect()

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// routes

app.use("/todos", todoRouter)

//GET / 
app.get('/', (req:Request, res:Response)=>{
res.json({message:"Hello World"})
})


app.listen(PORT, ()=>console.log(`App running on port ${PORT}`))
