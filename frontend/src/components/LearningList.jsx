import "../styles/LearningList.css";

function LearningList({ technologies, handleRemoveTechnology }) {
  return (
    <section className="learning-section">
      <h2>Currently Learning</h2>

      <ul className="learning-list">
        {technologies.map((technology) => (
          <li key={technology.id} 
              className="learning-item"
          >
            <span className="technology-name">{technology.name}</span>

            <button
              className="remove-button"
              type="button"
              onClick={() => handleRemoveTechnology(technology)}
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