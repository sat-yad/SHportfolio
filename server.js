import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// __dirname banane ke liye (kyunki ES Module hai)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 👉 React build serve karna
app.use(express.static(path.join(__dirname, "Portfolio-Client/dist")));

// API routes (example)
app.get("/api/test", (req, res) => {
  res.json({ message: "API working fine 🚀" });
});

// React ke sabhi routes handle karne ke liye (SPA fallback)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "Portfolio-Client/dist/index.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
