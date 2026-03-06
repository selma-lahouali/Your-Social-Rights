import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import Claims from "./Pages/Claims/Claims.jsx";
import Downloads from "./Pages/Downloads/Downloads.jsx";
import Suggestions from "./Pages/Suggestions/Suggestions.jsx";
import DisabilityInsurance from "./pages/DisabilityInsurance/DisabilityInsurance.jsx";
import FamilyAllocation from "./pages/FamilyAllocation/FamilyAllocation.jsx";
import HealthInsurance from "./pages/HealthInsurance/HealthInsurance.jsx";
import MaternityInsurance from "./Pages/MaternityInsurance/MaternityInsurance.jsx";
import OccupationalDiseases from "./Pages/OccupationalDiseases/OccupationalDiseases.jsx";
import WorkAccident from "./Pages/WorkAccident/WorkAccident.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      // navbar routes
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
      // sidebar routes
      {
        path: "healthInsurance",
        element: <HealthInsurance></HealthInsurance>,
      },
      {
        path: "maternityInsurance",
        element: <MaternityInsurance></MaternityInsurance>,
      },
      {
        path: "disabilityInsurance",
        element: <DisabilityInsurance></DisabilityInsurance>,
      },
      {
        path: "familyAllocation",
        element: <FamilyAllocation></FamilyAllocation>,
      },
      {
        path: "workAccident",
        element: <WorkAccident></WorkAccident>,
      },
      {
        path: "occupationalDiseases",
        element: <OccupationalDiseases></OccupationalDiseases>,
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
