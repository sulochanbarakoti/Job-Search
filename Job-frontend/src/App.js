import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/Home";
import "./style.css";
import { UserContext } from "./context/userContext";

function App() {
  const [allData, setAllData] = useState({});
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/registration" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
