import Dashboard from "pages/Dashboard";
import Home from "pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Routess() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default Routess;
