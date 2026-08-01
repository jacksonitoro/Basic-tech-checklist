import { getAllKnowledgeItems } from "../repositories/knowledgeItemRepository.js";

export async function getKnowledgeItems(req, res) {
  try {
    const knowledgeItems = await getAllKnowledgeItems();

    res.status(200).json(knowledgeItems);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to retrieve Knowledge Items."
    });
  }
}