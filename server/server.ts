import {createServer} from "http"
const httpServer = createServer()
const io = new server(httpServer,{
    cors:{
        origin: ""
    }
});
 io.on("connection",(socket)=>{
    console.log()
 })