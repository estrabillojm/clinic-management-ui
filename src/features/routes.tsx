import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import { ErrorPageDisplay } from "./index.features";
import AdministratorPage from "./views/AdministratorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPageDisplay />,
    children: [
        { path: "Administrator", element: <AdministratorPage/> },
        // ADD MULTIPLE IF NEEDED
    ]
  },
]);

export default routes;
