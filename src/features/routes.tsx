import { createBrowserRouter, useNavigate } from "react-router-dom";
import App from "../App";
import { ErrorPageDisplay } from "./index.features";
import SystemAdministratorPage from "./views/administrator/SystemAdministratorPage";
import AdminMasterlistPage from "./views/administrator/AdminMasterlistPage";
import LoginPage from "./views/auth/LoginPage";
import { useEffect } from "react";

// General Patient
import BranchList from "./views/branch/BranchList";
import PatientList from "./views/patient/PatientList";
import ViewPatient from "./views/patient/ViewPatient";
import AddPatient from "./views/patient/AddPatient";
import UserAdministratorPage from "./views/administrator/UserAdministratorPage";
import EditPatient from "./views/patient/EditPatient";


// Optical Patient
import OpticalPatientList from "./views/optical-patient/OpticalPatientList";

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
        // { path: "administrator/system", element: <PrivateRoute element={<SystemAdministratorPage/>} /> },
        // { path: "administrator/user", element: <PrivateRoute element={<UserAdministratorPage/>} /> },
        // { path: "admin-masterlist", element: <PrivateRoute element={<AdminMasterlistPage />} /> },
        { path: "branches", element: <PrivateRoute element={<BranchList />} /> },
        { path: "clinic/:clinicId/patients/list/:branchId", element: <PrivateRoute element={<PatientList />} /> },
        { path: "clinic/:clinicId/branch/:branchId/patient/:patientId/info", element: <PrivateRoute element={<ViewPatient />} /> },
        { path: "clinic/:clinicId/branch/:branchId/patient/add/new", element: <PrivateRoute element={<AddPatient />} /> },
        { path: "clinic/:clinicId/branch/:branchId/patient/:patientId/add/transaction", element: <PrivateRoute element={<EditPatient />} /> },

        { path: "clinic/:clinicId/optical/list/:branchId", element: <PrivateRoute element={<OpticalPatientList />} /> },
        // ADD MULTIPLE IF NEEDED
    ],
  },
  { path: "login", element: <LoginPage/> },
]);

export default routes;
