import { io } from "socket.io-client";

const socketConnection = io("http://localhost:8080", {
  auth: {
    token: localStorage.getItem("token"),
  },
});

export default socketConnection;
