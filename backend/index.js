import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import fs from "fs";
import http from "http";
import { Server } from "socket.io";

// Get current file path and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use((req, res, next) => {
    res.removeHeader("X-Frame-Options");
    next();
  });

app.use(cors());

io.on("connection", (socket) => {
  console.log("🔥 A user connected");

  socket.on("creator-join", (data) => {
    console.log("✅ Creator joined with data:", data);
    // Handle creator-join event
  });

  socket.on("disconnect", () => {
    console.log("❌ User disconnected");
  });
});

// ✅ Serve static files from "public/TemplateData"
app.use("/TemplateData", express.static(path.join(__dirname, "public/TemplateData")));

// ✅ Serve other static files from "public"
app.use(express.static(path.join(__dirname, "public")));

// ✅ Custom route to serve files from /game
app.get("/game*", (req, res) => {
  let filePath = path.join(__dirname, "public", "game", "index.html");

  if (req.url !== "/game" && req.url !== "/game/") {
    // Extract the file path from the URL (e.g., /game/script.js -> script.js)
    const relativeFilePath = req.url.replace("/game", "");
    filePath = path.join(__dirname, "public", "game", relativeFilePath);
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const mimeTypes = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".json": "application/json",
    ".css": "text/css",
    ".png": "image/png",
    ".jpg": "image/jpg",
    ".gif": "image/gif",
    ".wasm": "application/wasm",
    ".data": "application/octet-stream",
  };

  const contentType = mimeTypes[extname] || "application/octet-stream";

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.status(404).send("404 Not Found");
      } else {
        res.status(500).send(`Server Error: ${err.code}`);
      }
    } else {
      res.status(200).contentType(contentType).send(content);
    }
  });
});

const PORT = 4000;

// ✅ Start the HTTP server (instead of app)
server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
