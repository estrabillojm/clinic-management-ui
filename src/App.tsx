import React from "react";
import { Outlet } from "react-router-dom";
import "./index.css";
import { Sidebar } from "./features/components/Sidebar";

const App: React.FC = () => {
  return (
    <main>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <Outlet />
      </div>
    </main>
  );
};

export default App;
