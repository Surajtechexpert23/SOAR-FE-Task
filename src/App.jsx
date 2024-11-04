import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/sidebar/SideBar";
import NavBar from "./components/navbar/Navbar";
import Dashboard from "./pages/Dashboard";

// Dummy components for different routes
const Settings = () => <div>Settings Content</div>;

const App = () => {
  useEffect(()=>{console.log(window.location.pathname)},[])
  return (
    <Router>
      <div className="flex">
        <SideBar />
        <div className="flex-1">
          <NavBar />
          <main className="p-6 ">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
