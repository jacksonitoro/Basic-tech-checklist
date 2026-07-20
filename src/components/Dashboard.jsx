import { useState } from "react";

import SummaryCard from "./SummaryCard";
import LearningList from "./LearningList";
import RecentProjects from "./RecentProjects";
import Counter from "./Counter";
import { currentlyLearning } from "../constants/currentlyLearning";
import { recentProjects } from "../constants/recentProjects";
import { summaryData } from "../constants/dashboardData";

function Dashboard() {
  const [technologies, setTechnologies] = useState(currentlyLearning);
  
  function addTechnology() {
    
    setTechnologies((prevTechnologies) => {
      if (prevTechnologies.includes("AWS")) {
        return prevTechnologies;
      }
      return [...prevTechnologies, "AWS"];
    });
    
  }

  return (
    <section className="dashboard">
      <h2>Dashboard</h2>

      <div className="summary-grid">
        {summaryData.map((summary) => (
          <SummaryCard
            key={summary.title}
            title={summary.title}
            value={summary.value}
          />
        ))}
      </div>
      <LearningList technologies={technologies} />

      <button onClick={addTechnology}>Add Technology</button>

      <RecentProjects projects={recentProjects} />
      <Counter />
    </section>
  );
}



export default Dashboard;