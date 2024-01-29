import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import routes from "./features/routes";
import { setupStore } from "./redux/store";

const el = document.getElementById("root");

if (el) {
  const root = ReactDOM.createRoot(el);
  root.render(
    <Provider store={setupStore()}>
      <RouterProvider router={routes} />
    </Provider>
  );
} else {
  console.error("Element with ID of 'root' not found");
}