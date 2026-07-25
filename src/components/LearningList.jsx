

function LearningList({ technologies, handleRemoveTechnology }) {
  return (
    <section className="learning-section">
      <h2>Currently Learning</h2>

      <ul className="learning-list">
        {technologies.map((technology) => (
          <li key={technology}>
            <span>{technology}</span>

            <button 
              type="button" 
              onClick={() => handleRemoveTechnology(technology)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default LearningList;