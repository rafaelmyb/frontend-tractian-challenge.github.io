import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import { Home, AssetDetails, WorkOrders, Assets, Users, Dashboard } from "./routes";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/ativos",
        element: <Assets />,
      },
      {
        path: "/ativo/:id",
        element: <AssetDetails />,
      },
      {
        path: "/usuarios",
        element: <Users />,
      },
      {
        path: "/ordens-de-servico",
        element: <WorkOrders />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
