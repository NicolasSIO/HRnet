import React from "react";
import ReactDOM from "react-dom/client";
import routes from "~react-pages";
import { Provider } from "react-redux";
import { mainStore } from "@/redux/index.js";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { persistor } from "./redux";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={mainStore}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
