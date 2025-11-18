import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MainLayout from "./Layout/MainLayout.jsx";
import { RouterProvider } from "react-router";
import { router } from "./Router/Router.jsx";
import UserProvider from "./UseContex.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>
);
