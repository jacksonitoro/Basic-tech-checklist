import express from "express";
import cors from "cors";
import "../database/database.js";
import knowledgeItemRoutes from "./routes/knowledgeItemRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/knowledge-items", knowledgeItemRoutes);

// Health check route
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "SkillForge API is running"
  });
});

export default app;