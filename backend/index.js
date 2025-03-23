import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import http from "http";
import fs from "fs";

// Get current file path and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);

// Middleware to remove X-Frame-Options header
app.use((req, res, next) => {
  res.removeHeader("X-Frame-Options");
  next();
});

app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Create a folder to store files
const filesFolder = path.join(__dirname, "saved-files");
if (!fs.existsSync(filesFolder)) {
  fs.mkdirSync(filesFolder);
}

// Endpoint to save the file
app.post("/save-file", (req, res) => {
  const { fileName, base64Data } = req.body;

  if (!fileName || !base64Data) {
    return res.status(400).json({ success: false, error: "fileName and base64Data are required" });
  }

  // Decode the base64 data
  // eslint-disable-next-line no-undef
  const fileBuffer = Buffer.from(base64Data, "base64");

  // Save the file to the folder
  const filePath = path.join(filesFolder, fileName);
  fs.writeFile(filePath, fileBuffer, (err) => {
    if (err) {
      console.error("Error saving file:", err);
      return res.status(500).json({ success: false, error: "Error saving file" });
    }

    console.log("File saved successfully:", fileName);
    res.status(200).json({ success: true });
  });
});

// Start the server
const PORT = 4000;
server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});