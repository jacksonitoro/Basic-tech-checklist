import { useEffect, useState } from "react";

//Components
import QuickActions from "./QuickActions";
import SummaryCard from "./SummaryCard";
import LearningList from "./LearningList";
import RecentProjects from "./RecentProjects";


//Styles
import "../styles/Dashboard.css";

//Data
import { getKnowledgeItems } from "../services/knowledgeItemService";

import { recentProjects } from "../constants/recentProjects";
import { summaryData } from "../constants/dashboardData";

function Dashboard() {

  //State Management
 const [knowledgeItems, setKnowledgeItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
  async function loadKnowledgeItems() {
    try {
      const data = await getKnowledgeItems();

      

      setKnowledgeItems(data);
    } catch (error) {
      console.error("Failed to load KnowledgeItems:", error);
    }
  }

  loadKnowledgeItems();
}, []);
 
  // Event Handlers

  function addKnowledgeItem() {
    const trimmedValue = inputValue.trim();



    if (!trimmedValue) {
      setInputValue("");
      return;
    }
      

    setKnowledgeItems((prevKnowledgeItems) => {
      const knowledgeItemExists = prevKnowledgeItems.some(
        (item) => 
          item.title.toLowerCase() === 
          trimmedValue.toLowerCase()
      );
      
      if (knowledgeItemExists) {
        return prevKnowledgeItems;
      }

      const newKnowledgeItem = {
        id: Date.now(),
        title: trimmedValue,
        category: "General",
        status: "Learning",
        priority: "Medium",
      };

      return [...prevKnowledgeItems, newKnowledgeItem];
    });

    setInputValue("");
  }

  function handleRemoveKnowledgeItem(knowledgeItemToRemove) {
    setKnowledgeItems((prevKnowledgeItems) =>
      prevKnowledgeItems.filter(
        (item) => 
          item.id !== knowledgeItemToRemove.id
      )
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
                ? knowledgeItems.length
                : summary.value
            }
          />
        ))}
      </div>

      <QuickActions
        inputValue={inputValue}
        setInputValue={setInputValue}
        addKnowledgeItem={addKnowledgeItem}
      />


      <LearningList 
        knowledgeItems={knowledgeItems}
        handleRemoveKnowledgeItem={handleRemoveKnowledgeItem}
      />

      <RecentProjects projects={recentProjects} />
      
    </section>
  );
}



export default Dashboard;