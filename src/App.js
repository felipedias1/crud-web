import React from "react";
import DataProvider from "./context/DataProvider";
import { Routes, Route } from "react-router-dom";
import Customers from "./pages/Customers";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer" element={<Customers />} />
      </Routes>
    </DataProvider>
  );
}

export default App;
