import "../styles/QuickActions.css";

function QuickActions({
  inputValue,
  setInputValue,
  addTechnology,
}) {
  return (
    <section className="quick-actions">
      <h3>Quick Actions</h3>

      <p className="quick-actions-description">
        Quickly add new technologies to your learning journey.
      </p>

      <div className="quick-actions-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter new technology"
        />

        <button
          className="primary-button"
          onClick={addTechnology}
        >
          Add Technology
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