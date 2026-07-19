import SummaryCard from "./SummaryCard";
import LearningList from "./LearningList";
import { currentlyLearning } from "../constants/currentlyLearning";
import { summaryData } from "../constants/dashboardData";

function Dashboard() {
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
      <LearningList technologies={currentlyLearning} />
    </section>
  );
}

export default Dashboard;