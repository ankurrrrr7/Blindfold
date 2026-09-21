import express from "express"
import { createServer } from "node:http"
import { Server } from "socket.io"
const app = express()
const httpserver = createServer(app)
app.get("/",(req, res)=>{ 
    res.send("Hello world")
})
const io = new Server(httpserver)
io.on("connection",(socket)=>{
    console.log("Socket ID:", socket.id)
})
httpserver.listen(3000,()=>{
    console.log("Server connected succesfully")
})
