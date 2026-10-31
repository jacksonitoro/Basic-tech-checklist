import {
  getAllKnowledgeItems,
  createKnowledgeItem
} from "../repositories/knowledgeItemRepository.js";

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

export async function postKnowledgeItem(req, res) {
  try {
    const {
      title,
      category = "General",
      status = "Learning",
      progress = 0
    } = req.body ?? {};

    // Validate title
    if (typeof title !== "string" || !title.trim()) {
      return res.status(400).json({
        message: "Title is required."
      });
    }

    // Validate category
    if (typeof category !== "string" || !category.trim()) {
      return res.status(400).json({
        message: "Category is required."
      });
    }

    // Validate status
    if (typeof status !== "string" || !status.trim()) {
      return res.status(400).json({
        message: "Status is required."
      });
    }

    // Validate progress
    if (
      !Number.isInteger(progress) ||
      progress < 0 ||
      progress > 100
    ) {
      return res.status(400).json({
        message: "Progress must be an integer between 0 and 100."
      });
    }

    const newKnowledgeItem = await createKnowledgeItem({
      title: title.trim(),
      category: category.trim(),
      status: status.trim(),
      progress
    });

    res.status(201).json(newKnowledgeItem);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to create Knowledge Item."
    });
  }
}