import { createBrowserRouter, useNavigate } from "react-router-dom";
import App from "../App";
import { ErrorPageDisplay } from "./index.features";
import AdministratorPage from "./views/administrator/AdministratorPage";
import AdminMasterlistPage from "./views/administrator/AdminMasterlistPage";
import LoginPage from "./views/auth/LoginPage";
import { useEffect } from "react";
import BranchList from "./views/branch/BranchList";
import PatientList from "./views/patient/PatientList";

type PrivateRouteProps = {
  element: React.ReactNode | null;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const accessToken = localStorage.getItem("accesstoken");
  const navigate = useNavigate();
  let emptyToken = false;
  if(accessToken){
    return <>{element}</>;
  }else{
    emptyToken = true;
  }

  useEffect(() => {
    navigate("/login");;
  }, [emptyToken, navigate])
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPageDisplay />,
    children: [
        { path: "administrator", element: <PrivateRoute element={<AdministratorPage/>} /> },
        { path: "admin-masterlist", element: <PrivateRoute element={<AdminMasterlistPage />} /> },
        { path: "branches", element: <PrivateRoute element={<BranchList />} /> },
        { path: "patients/list", element: <PrivateRoute element={<PatientList />} /> },
        // ADD MULTIPLE IF NEEDED
    ],
  },
  { path: "login", element: <LoginPage/> },
]);

export default routes;
