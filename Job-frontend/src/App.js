import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Login></Login>} />
          <Route path="/registration" element={<Signup></Signup>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
