import express from "express";

import {
  getKnowledgeItems,
  postKnowledgeItem,
  putKnowledgeItem
} from "../controllers/knowledgeItemController.js";

const router = express.Router();

router.get("/", getKnowledgeItems);
router.post("/", postKnowledgeItem);
router.put("/:id", putKnowledgeItem);

export default router;