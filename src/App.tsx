import React from "react";
import { Outlet } from "react-router-dom";

import "./index.css";

const App: React.FC = () => {
  return (
    <main>
      <div className="">
        <Outlet />
      </div>
    </main>
  );
};

export default App;
