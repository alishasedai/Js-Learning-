import { io } from "socket.io-client";

const socketConnection = io(import.meta.env.VITE_BACKEND_URL, {
  auth: {
    token: localStorage.getItem("token"),
  },
});

export default socketConnection;
