import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SideBar from "./components/sidebar/SideBar";
import NavBar from "./components/navbar/Navbar";
import Dashboard from "./pages/Dashboard";
import CreditCards from "./pages/CreditCards";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <SideBar className="fixed h-full" />
        <div className="flex-1 "> {/* Adjust for the sidebar width */}
          <NavBar className="fixed top-0 left-0 right-0 " />
          <main className="p-6 pt-8 h-[calc(100vh-80px)] overflow-y-auto"> {/* Adjust for navbar height */}
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/credit_cards" element={<CreditCards />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
