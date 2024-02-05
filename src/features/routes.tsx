import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import { ErrorPageDisplay } from "./index.features";
import AdministratorPage from "./views/AdministratorPage";
import AdminMasterlistPage from "./views/AdminMasterlistPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPageDisplay />,
    children: [
        { path: "Administrator", element: <AdministratorPage/> },
        { path: "AdminMasterList", element: <AdminMasterlistPage /> },
        // ADD MULTIPLE IF NEEDED
    ]
  },
]);

export default routes;
