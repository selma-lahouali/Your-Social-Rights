import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import Claims from "./Pages/Claims/Claims.jsx";
import Downloads from "./Pages/Downloads/Downloads.jsx";
import Suggestions from "./Pages/Suggestions/Suggestions.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <App></App>,
      },
      { path: "claims", element: <Claims></Claims> },
      {
        path: "downloads",
        element: <Downloads></Downloads>,
      },
      {
        path: "suggestions",
        element: <Suggestions></Suggestions>,
      },
    ],
  },
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
);
