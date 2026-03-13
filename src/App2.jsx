import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CounterPage from "./pages/counterpage";
import AgePredictPage from "./pages/agepredictpage";
import Todlistpage from "./pages/todolistpage";
import Navbar from "./components/Navbar";

export default function App2() {
    const [userName, setUserName] = useState("Ayush Ranjan");

  return (
    <div className="bg-purple-300 flex-col w-full p-3 h-screen flex items-center font-semibold text-2">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home setUserName = {setUserName} userName={userName} />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/agepredict" element={<AgePredictPage />} />
          <Route path="/todolist" element={<Todlistpage />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}
