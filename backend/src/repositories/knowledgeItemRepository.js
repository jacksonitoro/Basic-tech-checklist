import db from "../../database/database.js";

export function getAllKnowledgeItems() {
  return new Promise((resolve, reject) => {
    const sql = `
      SELECT
        id,
        title,
        category,
        status,
        progress
      FROM knowledge_items
      ORDER BY id;
    `;

    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}