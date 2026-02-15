import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Quiz from "./Quiz";
import Facts from "./Facts";
import Challenge from "./Challenge";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/" className="logo">Fact or Quack 🦆</Link>
        <div className="nav-links">
          <Link to="/quiz">Quiz</Link>
          <Link to="/facts">Random Facts</Link>
          <Link to="/challenge">Challenge</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/facts" element={<Facts />} />
        <Route path="/challenge" element={<Challenge />} />
      </Routes>
    </Router>
  );
}

export default App;












