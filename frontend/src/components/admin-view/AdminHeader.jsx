import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const AdminHeader = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <header className="bg-gray-900 p-4 text-white shadow-md flex justify-between items-center">
      {/* Search bar */}
      <div className="flex items-center w-full max-w-md mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 pl-4 w-full bg-gray-700 rounded-md outline-none focus:ring-2 focus:ring-blue-400 text-white"
        />
        <i className="fas fa-search text-gray-400 ml-2"></i>
      </div>

      {/* Notification and Profile Menu */}
      <div className="flex items-center space-x-6">
        {/* Notifications */}
        <button className="relative text-gray-300 hover:text-white">
          <i className="fas fa-bell fa-lg"></i>
          <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2"
          >
            <span className="text-white font-medium">
              {user?.name || "Admin"}
            </span>
            <i className="fas fa-caret-down"></i>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg z-10">
              <Link
                to="/admin/dashboard"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Profile Settings
              </Link>
              <button
                onClick={logout}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
