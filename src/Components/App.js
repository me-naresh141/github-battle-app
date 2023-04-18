import React from "react";
import Popular from "./Popular";
import Battle from "./Battle";

import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="light min-h-screen ">
      <div className="container  margin-za  dark:bg-light_black">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Popular />} />
            <Route path="/battle" element={<Battle />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
