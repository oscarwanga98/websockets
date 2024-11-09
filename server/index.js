const {createServer}=require("http")
const {Server}=require("socket.io")

const httpServer= createServer()
const socket =new Server(httpServer,{
    cors:{
        origin:'http://127.0.0.1:5500'
    }
})

socket.on('connection', (socket)=>{
    // console.log(socket)
    socket.emit("message","this is emmited form the server to the client ")
    socket.on("message", (data) => {
      console.log(data);
    });
})
const PORT= 3000
httpServer.listen(PORT || 3001,()=>{
    // console.log(`Server is running on port ${PORT}`)
})