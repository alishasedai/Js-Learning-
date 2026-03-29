const express = require("express");
const {Server} = require("socket.io")
const http = require("http"); 
const { Socket } = require("dgram");
const app = express()

// socket connection
const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    // origin: "http://localhost:3000",
    origin: process.env.FRONTEND_URL,
    credentials: true,
  },

});

io.on("connection",(socket) => {
    console.log("connect User ",socket.id)

    // disconnect 
    io.on("disconnect", () => {
        console.log("disconnect user ",socket.id)
    })
})

module.exports = {
    app,
    server
}