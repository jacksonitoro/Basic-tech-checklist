import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function MainLayout({ children }) {
  return (
    <>
      <Header />

      <div className="app-container">
        <Sidebar />

        <main className="content">
          {children}
        </main>
      </div>
    </>
  );
}

export default MainLayout;