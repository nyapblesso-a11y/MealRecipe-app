import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import RecipePage from "./Pages/RecipePage";

function App() {
 
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/recipes" element={<RecipePage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
