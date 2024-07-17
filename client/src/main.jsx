import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Accueil from "./pages/accueil/Accueil";
import MesRandos from "./pages/mesrandos/MesRandos";
import VosRandos from "./pages/vosrandos/VosRandos";
import Connexion from "./pages/connexion/Connexion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Accueil />,
      },

      {
        path: "/Mes-Randos",
        element: <MesRandos />,
      },

      {
        path: "/Vos-Randos",
        element: <VosRandos />,
      },

      {
        path: "/Connexion",
        element: <Connexion />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
