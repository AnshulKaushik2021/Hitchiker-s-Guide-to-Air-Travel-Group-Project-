import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import React from "react";
import Select from "./pages/SelectFlight";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/select" element={<Select />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
