import express from "express";
import { getKnowledgeItems } from "../controllers/knowledgeItemController.js";

const router = express.Router();

router.get("/", getKnowledgeItems);

export default router;