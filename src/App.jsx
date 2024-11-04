import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/sidebar/SideBar";
import NavBar from "./components/navbar/Navbar";
import CreditCards from "./components/cards/CreditCards";

// Dummy components for different routes
const Dashboard = () => <div>Dashboard Content</div>;
const Settings = () => <div>Settings Content</div>;

const App = () => {
  useEffect(()=>{console.log(window.location.pathname)},[])
  return (
    <Router>
      <div className="flex">
        <SideBar />
        <div className="flex-1">
          <NavBar />
          <main className="p-6">
            <Routes>
              <Route path="/dashboard" element={<CreditCards />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
