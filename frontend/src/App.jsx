import "./styles/App.css";

import MainLayout from "./layouts/MainLayout";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <MainLayout>
      <Dashboard />
    </MainLayout>
  );
}

export default App;