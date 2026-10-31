
import "../styles/LearningList.css";

function LearningList({
  knowledgeItems,
  handleRemoveKnowledgeItem,
  editingItem,
  handleEditKnowledgeItem,
  handleCancelEdit,
  handleEditChange,
  handleUpdateKnowledgeItem,
  isUpdating,
}) {
  return (
    <section className="learning-section">
      <h2>Currently Learning</h2>

      <ul className="learning-list">
        {knowledgeItems.map((item) => (
          <li key={item.id} className="learning-item">

            {editingItem?.id === item.id ? (
              <div className="edit-form">

                <label>
                  Title
                  <input
                    type="text"
                    value={editingItem.title}
                    onChange={(e) =>
                      handleEditChange("title", e.target.value)
                    }
                  />
                </label>

                <label>
                  Category
                  <input
                    type="text"
                    value={editingItem.category}
                    onChange={(e) =>
                      handleEditChange("category", e.target.value)
                    }
                  />
                </label>

                <label>
                  Status
                  <select
                    value={editingItem.status}
                    onChange={(e) =>
                      handleEditChange("status", e.target.value)
                    }
                  >
                    <option value="Planned">Planned</option>
                    <option value="Learning">Learning</option>
                    <option value="Practicing">Practicing</option>
                    <option value="Completed">Completed</option>
                  </select>
                </label>

                <label>
                  Progress (%)
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="1"
                    value={editingItem.progress}
                    onChange={(e) =>
                      handleEditChange("progress", e.target.value)
                    }
                  />
                </label>

                <div className="edit-actions">
                  <button
                    type="button"
                    className="save-button"
                    disabled={isUpdating}
                    onClick={handleUpdateKnowledgeItem}
                  >
                    {isUpdating ? "Saving..." : "Save Changes"}
                  </button>

                  <button
                    type="button"
                    className="cancel-button"
                    disabled={isUpdating}
                    onClick={handleCancelEdit}
                  >
                    Cancel
                  </button>
                </div>

              </div>
            ) : (
              <>
                <div className="knowledge-item-details">
                  <span className="knowledge-item-name">
                    {item.title}
                  </span>

                  <span className="knowledge-item-meta">
                    {item.category} · {item.status} · {item.progress}%
                  </span>
                </div>

                <div className="learning-item-actions">
                  <button
                    type="button"
                    className="edit-button"
                    onClick={() => handleEditKnowledgeItem(item)}
                    disabled={editingItem !== null}
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    className="remove-button"
                    onClick={() => handleRemoveKnowledgeItem(item)}
                    disabled={editingItem !== null}
                  >
                    Remove
                  </button>
                </div>
              </>
            )}

          </li>
        ))}
      </ul>
    </section>
  );
}

export default LearningList;
