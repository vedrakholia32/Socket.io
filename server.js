import http from "http"
import express from "express"
import path from "path"
import { Server } from "socket.io"

const app = express()
const server = http.createServer(app)

const io = new Server(server)

// Socket.io
io.on("connection", (socket) => {
    socket.on("user-message", (message) => {
        io.emit("message", message)
    })
})


app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
    return res.sendFile("/public/index.html")
})

server.listen(9000, () => console.log('Server is running'))