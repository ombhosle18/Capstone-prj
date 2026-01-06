import React from "react";
import { Routes, Route } from "react-router-dom";

// Import your components
import Home from "./Main/Home"; 
import SignUp from "./Main/SignUp";

function App() {
  return (
    <Routes>
      {/* The path "/" renders the Home component */}
      <Route path="/" element={<Home />} />

      {/* The path "/signup" renders the SignUp component */}
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;