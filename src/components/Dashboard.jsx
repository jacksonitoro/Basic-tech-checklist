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
  const [inputValue, setInputValue] = useState("");
  
  function addTechnology() {
    console.log("Button clicked");

    const trimmedValue = inputValue.trim();

    console.log("Input:", trimmedValue);

    if (!trimmedValue) return;

    setTechnologies((prevTechnologies) => {
      console.log("Previous:", prevTechnologies);
      
      if (prevTechnologies.includes(trimmedValue)) {
        return prevTechnologies;
      }
      return [...prevTechnologies, trimmedValue];
    });
    setInputValue("");
  }

  return (
    <section className="dashboard">
      <h2>Dashboard</h2>

      <div className="summary-grid">
        {summaryData.map((summary) => (
          <SummaryCard
            key={summary.title}
            title={summary.title}
            value={
              summary.title === "Learning"
                ? technologies.length
                : summary.value
            }
          />
        ))}
      </div>
      <LearningList technologies={technologies} />

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter new technology"
      />
      <button onClick={addTechnology}>Add Technology</button>

      <RecentProjects projects={recentProjects} />
      <Counter />
    </section>
  );
}



export default Dashboard;