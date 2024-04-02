import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

import "./index.css";
const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  useEffect(() => {
    if(pathname === "/"){
     navigate("/login");
    }
  }, [pathname])
  return (
    <main className="relative">
      <Outlet />
    </main>
  );
};

export default App;
