const express = require("express");
const {Server} = require("socket.io")
const http = require("http"); 
const { Socket } = require("dgram");
const getUserDetailsFromToken = require("../helpers/getUserDetailsFromToken");
const userModel = require("../models/userModel");

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

//online user
const onlineUser = new Set()

// socket running at http://localhost:8080/
io.on("connection",async(socket) => {
    console.log("connect User ",socket.id)
    const token = socket.handshake.auth.token
    //current user details

    const user = await getUserDetailsFromToken(token);
    // console.log("user details",user)

    //create a room
    socket.join(user?._id)
    onlineUser.add(user?._id?.toString())

    io.emit("onlineUser",Array.from(onlineUser))
    socket.on("message-page",async(userId) => {
      console.log("user Id: ",userId)
      const userDetails = await userModel.findById(userId).select("-password")
      const payload = {
        _id : userDetails._id,
        name : userDetails?.name,
        email : userDetails?.email,
        profile_pic : userDetails?.profile_pic,
        onlineUser : onlineUser.has(userId)
      }
      socket.emit("message-user",payload)
    })

    // disconnect 
    socket.on("disconnect", () => {
        onlineUser.delete(user?._id)
        console.log("disconnect user ",socket.id)
    })
})

module.exports = {
    app,
    server
}