import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RecipeProvider } from "./context/RecipeContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RecipeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecipeProvider>
  </StrictMode>
);
