import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import PageTasks from "./pages/TasksPage.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const rootElement = document.getElementById("root");

// Use createRoot from react-dom/client
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="tasks" element={<PageTasks />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
