import { createBrowserRouter, useNavigate } from "react-router-dom";
import App from "../App";
import { ErrorPageDisplay } from "./index.features";
import SystemAdministratorPage from "./views/administrator/SystemAdministratorPage";
import AdminMasterlistPage from "./views/administrator/AdminMasterlistPage";
import LoginPage from "./views/auth/LoginPage";
import { useEffect } from "react";
import BranchList from "./views/branch/BranchList";
import PatientList from "./views/patient/PatientList";
import ViewPatient from "./views/patient/ViewPatient";
import AddPatient from "./views/patient/AddPatient";
import UserAdministratorPage from "./views/administrator/UserAdministratorPage";

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
        { path: "administrator/system", element: <PrivateRoute element={<SystemAdministratorPage/>} /> },
        { path: "administrator/user", element: <PrivateRoute element={<UserAdministratorPage/>} /> },
        { path: "admin-masterlist", element: <PrivateRoute element={<AdminMasterlistPage />} /> },
        { path: "branches", element: <PrivateRoute element={<BranchList />} /> },
        { path: "patients/list/:branchId", element: <PrivateRoute element={<PatientList />} /> },
        { path: "patient/:patientId/info", element: <PrivateRoute element={<ViewPatient />} /> },
        { path: "patient/add/new", element: <PrivateRoute element={<AddPatient />} /> },
        { path: "patient/:patientId/add/transaction", element: <PrivateRoute element={<AddPatient />} /> },
        // ADD MULTIPLE IF NEEDED
    ],
  },
  { path: "login", element: <LoginPage/> },
]);

export default routes;
