import express from "express";

import {
  getKnowledgeItems,
  postKnowledgeItem
} from "../controllers/knowledgeItemController.js";

const router = express.Router();

router.get("/", getKnowledgeItems);
router.post("/", postKnowledgeItem);

export default router;