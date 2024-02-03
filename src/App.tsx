import React from "react";
import { Outlet } from "react-router-dom";

import "./index.css";

const App: React.FC = () => {
  return (
    <main>
        <Outlet />
    </main>
  );
};

export default App;
