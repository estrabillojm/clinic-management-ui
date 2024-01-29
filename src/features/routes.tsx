import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import { ErrorPageDisplay } from "./index.features";
import SamplePage from "./views/SamplePage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPageDisplay />,
    children: [
        { path: "sample", element: <SamplePage/> },
        // ADD MULTIPLE IF NEEDED
    ]
  },
]);

export default routes;
