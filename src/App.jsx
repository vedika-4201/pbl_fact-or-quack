import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";

import LearningHub from "./LearningHub";
import Fallacies from "./Fallacies";
import MythEvolution from "./MythEvolution";
import History from "./History";
import Quiz from "./Quiz";           
import Facts from "./Facts";         
import Challenge from "./Challenge";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/learning" element={<LearningHub />} />
      <Route path="/fallacies" element={<Fallacies />} />
      <Route path="/history" element={<History />} />
      <Route path="/myth" element={<MythEvolution />} />
      <Route path="/quiz" element={<Quiz />} />         
      <Route path="/facts" element={<Facts />} />       
      <Route path="/challenges" element={<Challenge />} /> 
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
}

export default App;



















