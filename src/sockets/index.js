import { io } from "socket.io-client";

// Create a Socket.IO instance
const socket = io("http://localhost:4000", {
  autoConnect: false, // Disable automatic connection
  reconnection: true, // Enable reconnection
  reconnectionAttempts: 5, // Number of reconnection attempts
  reconnectionDelay: 1000, // Delay between reconnection attempts in milliseconds
});

// Export the socket instance
export { socket };