import db from "../../database/database.js";

// Retrieve all Knowledge Items
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

// Create a new Knowledge Item
export function createKnowledgeItem(knowledgeItem) {
  return new Promise((resolve, reject) => {
    const { title, category, status, progress } = knowledgeItem;

    const sql = `
      INSERT INTO knowledge_items (
        title,
        category,
        status,
        progress
      )
      VALUES (?, ?, ?, ?);
    `;

    db.run(
      sql,
      [title, category, status, progress],
      function (err) {
        if (err) {
          reject(err);
          return;
        }

        const newId = this.lastID;

        db.get(
          `SELECT id, title, category, status, progress
           FROM knowledge_items
           WHERE id = ?;`,
          [newId],
          (err, row) => {
            if (err) {
              reject(err);
            } else if (!row) {
              reject(new Error("Created Knowledge Item could not be retrieved."));
            } else {
              resolve(row);
            }
          }
        );
      }
    );
  });
}