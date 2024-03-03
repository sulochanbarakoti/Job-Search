import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/Home";
import Dashboard from "../src/pages/dashboard";

import "./style.css";

import Search from "./pages/search";
import RequireAuth from "./auth/RequireAuth";
import AccessDenied from "./components/AccessDenied";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/registration" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/search" element={RequireAuth(<Search />)} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
