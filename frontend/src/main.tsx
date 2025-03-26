// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css"; // Tailwind CSS is included here

ReactDOM.createRoot(document.getElementById("root")!).render(
  <App /> // Removed React.StrictMode
);