import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation hook

const NavBar = () => {
  const [currentLocation, setCurrentLocation] = useState("");
  const location = useLocation();
  useEffect(() => {
    setCurrentLocation(location.pathname.replace("/", ""));
  }, [location.pathname]);

  return (
    <nav className="h-20 shadow-md border-b-2 border-slate-200 flex items-center justify-between px-6 z-10">
      <h1 className="text-2xl font-bold">
        {currentLocation == "dashboard"
          ? "Overview"
          : currentLocation == "credit_cards"
          ? "Credit Cards"
          : "Settings"}
      </h1>
    </nav>
  );
};

export default NavBar;
