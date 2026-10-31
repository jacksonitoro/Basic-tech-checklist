import { useEffect, useState } from "react";

//Components
import QuickActions from "./QuickActions";
import SummaryCard from "./SummaryCard";
import LearningList from "./LearningList";
import RecentProjects from "./RecentProjects";


//Styles
import "../styles/Dashboard.css";

//Data
import {
  getKnowledgeItems,
  createKnowledgeItem,
  updateKnowledgeItem
} from "../services/knowledgeItemService";

import { recentProjects } from "../constants/recentProjects";
import { summaryData } from "../constants/dashboardData";

function Dashboard() {

  //State Management
  const [knowledgeItems, setKnowledgeItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

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

  async function addKnowledgeItem() {
    const trimmedValue = inputValue.trim();

    if (!trimmedValue || isAdding) {
      return;
    }

    const knowledgeItemExists = knowledgeItems.some(
      (item) =>
        item.title.toLowerCase() === trimmedValue.toLowerCase()
    );

    if (knowledgeItemExists) {
      setInputValue("");
      return;
    }

    try {
      setIsAdding(true);

      const newKnowledgeItem = await createKnowledgeItem({
        title: trimmedValue,
        category: "General",
        status: "Learning",
        progress: 0,
      });

      setKnowledgeItems((prevKnowledgeItems) => [
        ...prevKnowledgeItems,
        newKnowledgeItem,
      ]);

      setInputValue("");

    } catch (error) {
      console.error("Failed to create KnowledgeItem:", error);
      alert(error.message);

    } finally {
      setIsAdding(false);
    }
  }

  function handleEditKnowledgeItem(item) {
    setEditingItem({ ...item });
  }

  function handleCancelEdit() {
    setEditingItem(null);
  }

  function handleEditChange(field, value) {
    setEditingItem((prevItem) => ({
      ...prevItem,
      [field]: value,
    }));
  }

  async function handleUpdateKnowledgeItem() {
    if (!editingItem || isUpdating) {
      return;
    }

    try {
      setIsUpdating(true);

      const updatedKnowledgeItem = await updateKnowledgeItem(
        editingItem.id,
        {
          title: editingItem.title.trim(),
          category: editingItem.category.trim(),
          status: editingItem.status,
          progress: Number(editingItem.progress),
        }
      );

      setKnowledgeItems((prevKnowledgeItems) =>
        prevKnowledgeItems.map((item) =>
          item.id === updatedKnowledgeItem.id
            ? updatedKnowledgeItem
            : item
        )
      );

      setEditingItem(null);

    } catch (error) {
      console.error("Failed to update KnowledgeItem:", error);
      alert(error.message);

    } finally {
      setIsUpdating(false);
    }
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
        isAdding={isAdding}
      />


      <LearningList
        knowledgeItems={knowledgeItems}
        handleRemoveKnowledgeItem={handleRemoveKnowledgeItem}
        editingItem={editingItem}
        handleEditKnowledgeItem={handleEditKnowledgeItem}
        handleCancelEdit={handleCancelEdit}
        handleEditChange={handleEditChange}
        handleUpdateKnowledgeItem={handleUpdateKnowledgeItem}
        isUpdating={isUpdating}
      />

      <RecentProjects projects={recentProjects} />

    </section>
  );
}



export default Dashboard;