import "../styles/QuickActions.css";

function QuickActions({
  inputValue,
  setInputValue,
  addKnowledgeItem,
  isAdding
}) {
  return (
    <section className="quick-actions">
      <h3>Quick Actions</h3>

      <p className="quick-actions-description">
        Quickly add new knowledge items to your learning journey.
      </p>

      <div className="quick-actions-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter new knowledge item"
        />

        <button
          className="primary-button"
          onClick={addKnowledgeItem}
          disabled={isAdding || !inputValue.trim()}
        >
          {isAdding ? "Adding..." : "Add Knowledge Item"}
        </button>
      </div>

      <div className="coming-soon">
        <p>Coming Soon</p>

        <div className="secondary-actions">
          <button disabled>Add Learning</button>
          <button disabled>Add Project</button>
        </div>
      </div>
    </section>
  );
}

export default QuickActions;