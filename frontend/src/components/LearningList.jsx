import "../styles/LearningList.css";

function LearningList({ 
  knowledgeItems, 
  handleRemoveKnowledgeItem }) {
  return (
    <section className="learning-section">
      <h2>Currently Learning</h2>

      <ul className="learning-list">
        {knowledgeItems.map((item) => (
          <li key={item.id} 
              className="learning-item"
          >
            <span className="knowledge-item-name">{item.title}</span>

            <button
              className="remove-button"
              type="button"
              onClick={() => handleRemoveKnowledgeItem(item)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default LearningList;