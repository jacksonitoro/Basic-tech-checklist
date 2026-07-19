

function LearningList({ technologies }) {
  return (
    <section className="learning-section">
      <h2>Currently Learning</h2>

      <ul className="learning-list">
        {technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </section>
  );
}

export default LearningList;