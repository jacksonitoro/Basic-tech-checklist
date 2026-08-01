import sqlite3 from "sqlite3";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const databasePath = path.join(__dirname, "skillforge.db");
const initSqlPath = path.join(__dirname, "init.sql");

const db = new sqlite3.Database(databasePath, (err) => {
  if (err) {
    console.error("Failed to connect to SQLite:", err.message);
    return;
  }

  console.log("Connected to SQLite database.");

  const schema = fs.readFileSync(initSqlPath, "utf8");

  db.exec(schema, (err) => {
  if (err) {
    console.error("Failed to initialize database:", err.message);
    return;
  }

  console.log("Database initialized successfully.");

  db.get(
    "SELECT COUNT(*) AS count FROM knowledge_items",
    (err, row) => {
      if (err) {
        console.error("Failed to check existing data:", err.message);
        return;
      }

      if (row.count === 0) {
        const seedSqlPath = path.join(__dirname, "seed.sql");
        const seedSql = fs.readFileSync(seedSqlPath, "utf8");

        db.exec(seedSql, (err) => {
          if (err) {
            console.error("Failed to seed database:", err.message);
          } else {
            console.log("Sample KnowledgeItems inserted.");
          }
        });
      } else {
        console.log("Database already contains data.");
      }
    }
  );
  });
});

export default db;