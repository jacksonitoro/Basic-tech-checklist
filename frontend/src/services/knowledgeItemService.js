const API_BASE_URL = "http://localhost:3000/api";

export async function getKnowledgeItems() {
  const response = await fetch(`${API_BASE_URL}/knowledge-items`);

  if (!response.ok) {
    throw new Error("Failed to fetch KnowledgeItems.");
  }

  return response.json();
}