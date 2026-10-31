const API_BASE_URL = "http://localhost:3000/api";

// Retrieve all Knowledge Items
export async function getKnowledgeItems() {
  const response = await fetch(`${API_BASE_URL}/knowledge-items`);

  if (!response.ok) {
    throw new Error("Failed to fetch KnowledgeItems.");
  }

  return response.json();
}

// Create a Knowledge Item
export async function createKnowledgeItem(knowledgeItem) {
  const response = await fetch(`${API_BASE_URL}/knowledge-items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(knowledgeItem),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to create KnowledgeItem.");
  }

  return response.json();
}
