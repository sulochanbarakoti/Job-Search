import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Test from "./pages/test";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Login></Login>} />
          <Route path="/registration" element={<Signup></Signup>} />
          <Route path="/test" element={<Test></Test>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
