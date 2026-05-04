import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BlogProvider } from "./context/BlogContext.jsx";
import "./style.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BlogProvider>
      <App />
    </BlogProvider>
  </React.StrictMode>
);
