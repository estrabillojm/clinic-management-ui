import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./index.css";
const App: React.FC = () => {
  return (
    <main className="relative">
      <Outlet />
    </main>
  );
};

export default App;
