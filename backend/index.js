import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());

// ✅ Serve static files from "public/TemplateData"
app.use("/TemplateData", express.static(path.join(__dirname, "public/TemplateData")));

// ✅ Serve other static files from "public"
app.use(express.static(path.join(__dirname, "public")));

// 👉 Custom route to serve files (similar to the first code snippet)
app.get("*", (req, res) => {
    let filePath = path.join(__dirname, "public", req.url);
    if (filePath === path.join(__dirname, "public", "/")) filePath = path.join(__dirname, "public", "index.html");

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
                // File not found
                res.status(404).send("404 Not Found");
            } else {
                // Server error
                res.status(500).send("Server Error: " + err.code);
            }
        } else {
            // Success
            res.status(200).contentType(contentType).send(content);
        }
    });
});

// 👉 Route to serve editor.html
app.get("/editor", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "editor.html"));
});

// 👉 Route to serve viewer.html
app.get("/viewer", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "viewer.html"));
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});