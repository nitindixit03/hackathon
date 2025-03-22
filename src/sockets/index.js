import { io } from "socket.io-client";

export const socket = io("http://localhost:3000", { autoConnect: false });

// const handleConnect = () => {
//     socket.connect();
// };

socket.on("connect", () => {
    console.log("Connected to the server");
});

socket.on("message", (data) => {
    console.log("Received:", data);
});

socket.on("connect_error", (error) => {
    console.error("Connection failed:", error);
});
