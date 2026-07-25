import { useState } from "react";

//Components
import QuickActions from "./QuickActions";
import SummaryCard from "./SummaryCard";
import LearningList from "./LearningList";
import RecentProjects from "./RecentProjects";
import Counter from "./Counter";

//Styles
import "../styles/Dashboard.css";

//Data
import { currentlyLearning } from "../constants/currentlyLearning";
import { recentProjects } from "../constants/recentProjects";
import { summaryData } from "../constants/dashboardData";

function Dashboard() {

  //State Management
  const [technologies, setTechnologies] = useState(currentlyLearning);
  const [inputValue, setInputValue] = useState("");
 
  // Event Handlers

  function addTechnology() {
    const trimmedValue = inputValue.trim();



    if (!trimmedValue) {
      setInputValue("");
      return;
    }
      

    setTechnologies((prevTechnologies) => {
      if (prevTechnologies.includes(trimmedValue)) {
        return prevTechnologies;
      }

      return [...prevTechnologies, trimmedValue];
    });

    setInputValue("");
  }

  function handleRemoveTechnology(technologyToRemove) {
    setTechnologies((prevTechnologies) =>
      prevTechnologies.filter((technology) => technology !== technologyToRemove)
    );
  }

  return (
    <section className="dashboard">

      <header className="dashboard-header">
        <h1>Welcome back!</h1>

        <p>Track your learning journey, build real projects, and stay focused on your goals.</p>
      </header>

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

      <QuickActions
        inputValue={inputValue}
        setInputValue={setInputValue}
        addTechnology={addTechnology}
      />


      <LearningList 
        technologies={technologies}
        handleRemoveTechnology={handleRemoveTechnology}
      />

      <RecentProjects projects={recentProjects} />
      <Counter />
    </section>
  );
}



export default Dashboard;