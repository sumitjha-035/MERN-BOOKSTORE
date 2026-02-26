import express from "express";
import dotenv from "dotenv";
import bookRoutes from "./routes/bookRoutes.js"
import { connectDB } from "./config/db.js"
import cors from "cors";
dotenv.config()
const app=express();
const port=process.env.PORT || 3001

app.use(cors(
    {
       // origin: 'http://localhost:5173'
    }
))
app.use(express.json())
app.use("/books", bookRoutes)
connectDB().then(()=>{ 
    app.listen(port, ()=>{
        console.log(`http://localhost:${port}/books`)
    })
})
