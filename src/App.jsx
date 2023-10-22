import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import ChooseTheme from "./components/ChooseTheme";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Login, Register } from "./components/Login";
import Prieing from "./components/Prieing";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ChooseTheme" element={<ChooseTheme />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Login/Register" element={<Register />} />
        <Route path="/Prieing" element={<Prieing />} />
      </Routes>
    </Router>
  );
}

export default App;
