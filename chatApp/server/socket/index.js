const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
// const { Socket } = require("dgram");
const getUserDetailsFromToken = require("../helpers/getUserDetailsFromToken");
const userModel = require("../models/userModel");
const {
  conversationModel,
  messageModel,
} = require("../models/conversationModel");
const getConversation = require("../helpers/getConversation");
const app = express();

// socket connection
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    // origin: "http://localhost:3000",
    origin: process.env.FRONTEND_URL,
    credentials: true,
  },
});

//online user
const onlineUser = new Set();

// socket running at http://localhost:8080/
io.on("connection", async (socket) => {
  console.log("connect User ", socket.id);

  const token = socket.handshake.auth.token;

  const user = await getUserDetailsFromToken(token);

  socket.join(user?._id.toString());

  onlineUser.add(user?._id?.toString());

  io.emit("onlineUser", Array.from(onlineUser));

  // ================= MESSAGE PAGE =================
  socket.on("message-page", async (userId) => {
    const userDetails = await userModel.findById(userId).select("-password");

    const payload = {
      _id: userDetails._id,
      name: userDetails?.name,
      email: userDetails?.email,
      profile_pic: userDetails?.profile_pic,
      onlineUser: onlineUser.has(userId),
    };

    socket.emit("message-user", payload);

    const getConversationMessage = await conversationModel
      .findOne({
        $or: [
          { sender: user?._id, receiver: userId },
          { sender: userId, receiver: user?._id },
        ],
      })
      .populate("messages");

    socket.emit("message", getConversationMessage?.messages || []);
  });

  // ================= NEW MESSAGE =================
  socket.on("new message", async (data) => {
    if (!data?.sender || !data?.receiver) {
      console.log("Invalid message data", data);
      return;
    }

    let conversation = await conversationModel.findOne({
      $or: [
        { sender: data.sender, receiver: data.receiver },
        { sender: data.receiver, receiver: data.sender },
      ],
    });

    if (!conversation) {
      conversation = await new conversationModel({
        sender: data.sender,
        receiver: data.receiver,
      }).save();
    }

    const message = new messageModel({
      text: data.text,
      imageUrl: data.imageUrl,
      videoUrl: data.videoUrl,
      msgByUserId: data.msgByUserId,
    });

    const savedMessage = await message.save();

    await conversationModel.updateOne(
      { _id: conversation._id },
      { $push: { messages: savedMessage._id } },
    );

    const updatedConversation = await conversationModel
      .findOne({
        $or: [
          { sender: data.sender, receiver: data.receiver },
          { sender: data.receiver, receiver: data.sender },
        ],
      })
      .populate("messages");

    io.to(data?.sender).emit("message", updatedConversation?.messages || []);
    io.to(data?.receiver).emit("message", updatedConversation?.messages || []);
      //send  conversation
    const conversationSender = await getConversation(data?.sender);
    const conversationReceiver = await getConversation(data?.receiver);

   io.to(data.sender).emit("conversation", conversationSender);
   io.to(data.receiver).emit("conversation", conversationReceiver);
  });

  //sidebar message
  socket.on("sidebar", async (currentUserId) => {
    console.log("Current Users .. ->", currentUserId);
    const conversation = await getConversation(currentUserId);
    socket.emit("conversation", conversation);
  });
  // ================= DISCONNECT =================
  socket.on("disconnect", () => {
    onlineUser.delete(user?._id);
    console.log("disconnect user ", socket.id);
  });
});

module.exports = {
  app,
  server,
};
