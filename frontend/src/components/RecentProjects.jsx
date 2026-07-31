import "../styles/RecentProjects.css";

function RecentProjects({ projects }) {
  return (
    <section className="recent-projects-section">
      <h2>Recent Projects</h2>
      <ul className="recent-projects">
        {projects.map((project) => (
          <li key={project} 
              className="project-item">
              {project}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default RecentProjects;