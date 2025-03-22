import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(cors());
const httpServer = createServer(app);
const io = new Server(httpServer,{
    cors:"*"
});

let id = 0;

io.on("connection", (socket) => {
  id++;
  console.log(`user${id} connected: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log(`user${id} disconnected`);
  });
});

httpServer.listen(3000, () => {
  console.log("listening on *:3000");
});
