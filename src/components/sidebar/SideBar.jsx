import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { TiHome } from "react-icons/ti";
import { FaMoneyBill } from "react-icons/fa";
import { FaUser, FaRegCreditCard } from "react-icons/fa6";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { PiHandCoinsBold, PiLightbulbFill } from "react-icons/pi";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

const SideBar = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="min-h-screen shadow-xl pt-4 w-[full] xl:w-[15%] lg:w-[25%] md:w-[30%] sm:w-[35%]">
      <div className="flex items-center w-full justify-center">
        <img src={Logo} alt="logo" className="mr-12" />
      </div>
      <div className="flex flex-col mt-8 space-y-2">
        {/* Dashboard Tab */}
        <Link
          to="/dashboard"
          className={`flex items-center p-3 cursor-pointer transition w-full ${
            activeTab === "Dashboard"
              ? "text-black font-semibold border-l-4 border-black"
              : "text-gray-500"
          }`}
          onClick={() => handleTabClick("Dashboard")}
        >
          <TiHome className="text-3xl ml-[18px] " />
          <p className="ml-3">Dashboard</p>
        </Link>
        {/* Transactions Tab */}
        <Link
          to="#"
          className={`flex items-center p-3 cursor-pointer transition w-full ${
            activeTab === "Transactions"
              ? "text-black font-semibold border-l-4 border-black"
              : "text-gray-500"
          }`}
          onClick={() => handleTabClick("Transactions")}
        >
          <FaMoneyBill className="text-3xl ml-[18px] rotate-90 " />
          <p className="ml-3">Transactions</p>
        </Link>
        {/* Accounts Tab */}
        <Link
         to="#"
          className={`flex items-center p-3 cursor-pointer transition w-full ${
            activeTab === "Accounts"
              ? "text-black font-semibold border-l-4 border-black"
              : "text-gray-500"
          }`}
          onClick={() => handleTabClick("Accounts")}
        >
          <FaUser className="text-3xl ml-[18px] " />
          <p className="ml-3">Accounts</p>
        </Link>
        {/* Investment Tab */}
        <Link
          to="#"
          className={`flex items-center p-3 cursor-pointer transition w-full ${
            activeTab === "Investment"
              ? "text-black font-semibold border-l-4 border-black"
              : "text-gray-500"
          }`}
          onClick={() => handleTabClick("Investment")}
        >
          <RiBarChartHorizontalFill className="text-3xl ml-[18px] " />
          <p className="ml-3">Investment</p>
        </Link>
        {/* Credit Cards Tab */}
        <Link
          to="#"
          className={`flex items-center p-3 cursor-pointer transition w-full ${
            activeTab === "Credit Cards"
              ? "text-black font-semibold border-l-4 border-black"
              : "text-gray-500"
          }`}
          onClick={() => handleTabClick("Credit Cards")}
        >
          <FaRegCreditCard className="text-3xl ml-[18px] " />
          <p className="ml-3">Credit Cards</p>
        </Link>
        {/* Loans Tab */}
        <Link
         to="#"
          className={`flex items-center p-3 cursor-pointer transition w-full ${
            activeTab === "Loans"
              ? "text-black font-semibold border-l-4 border-black"
              : "text-gray-500"
          }`}
          onClick={() => handleTabClick("Loans")}
        >
          <PiHandCoinsBold className="text-3xl ml-[18px] " />
          <p className="ml-3">Loans</p>
        </Link>
        {/* Services Tab */}
        <Link
         to="#"
          className={`flex items-center p-3 cursor-pointer transition w-full ${
            activeTab === "Services"
              ? "text-black font-semibold border-l-4 border-black"
              : "text-gray-500"
          }`}
          onClick={() => handleTabClick("Services")}
        >
          <MdOutlineDesignServices className="text-3xl ml-[18px] " />
          <p className="ml-3">Services</p>
        </Link>
        {/* My Privileges Tab */}
        <Link
          to="#"
          className={`flex items-center p-3 cursor-pointer transition w-full ${
            activeTab === "My Privileges"
              ? "text-black font-semibold border-l-4 border-black"
              : "text-gray-500"
          }`}
          onClick={() => handleTabClick("My Privileges")}
        >
          <PiLightbulbFill className="text-3xl ml-[18px] " />
          <p className="ml-3">My Privileges</p>
        </Link>
        {/* Settings Tab */}
        <Link
          to="/settings"
          className={`flex items-center p-3 cursor-pointer transition w-full ${
            activeTab === "Settings"
              ? "text-black font-semibold border-l-4 border-black"
              : "text-gray-500"
          }`}
          onClick={() => handleTabClick("Settings")}
        >
          <IoMdSettings className="text-3xl ml-[18px] " />
          <p className="ml-3">Settings</p>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
