import React, { useState } from 'react';
import { ChevronDown, User, LogOut, Settings, HelpCircle, Users, Search, Bell } from 'lucide-react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


// const navigate = useNavigate()
const AccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLogout = async () => {
    try {
      
      await axios.post(
        'http://localhost:5000/api/v1/users/logout', 
        {}, 
        { withCredentials: true }
      );
      
      window.location.href ='/login'
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          onClick={toggleDropdown}
        >
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center mr-2">
              VS
            </div>
            <ChevronDown className="h-5 w-5" />
          </div>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              <User className="inline-block mr-2" size={16} /> Profile and visibility
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              <Settings className="inline-block mr-2" size={16} /> Activity
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              <HelpCircle className="inline-block mr-2" size={16} /> Cards
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              <Settings className="inline-block mr-2" size={16} /> Settings
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              <Users className="inline-block mr-2" size={16} /> Create Workspace
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={handleLogout}>
              <LogOut className="inline-block mr-2" size={16} /> Log out
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  return (
    <nav className="bg-[#a15c8b] text-white p-2 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-[#8a4f76] rounded">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          </svg>
        </button>
        <span className="font-bold text-xl">Trello</span>
        <div className="flex space-x-2">
          <button className="px-3 py-1 hover:bg-[#8a4f76] rounded">Workspaces</button>
          <button className="px-3 py-1 hover:bg-[#8a4f76] rounded">Recent</button>
          <button className="px-3 py-1 hover:bg-[#8a4f76] rounded">Starred</button>
          <button className="px-3 py-1 hover:bg-[#8a4f76] rounded">Templates</button>
        </div>
        <button className="bg-[#8a4f76] px-3 py-1 rounded hover:bg-[#7a466a]">Create</button>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#8a4f76] text-white placeholder-gray-300 px-3 py-1 rounded w-64 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-300" size={18} />
        </div>
        <button className="p-2 hover:bg-[#8a4f76] rounded">
          <Bell size={20} />
        </button>
        <button className="p-2 hover:bg-[#8a4f76] rounded">
          <HelpCircle size={20} />
        </button>
        <AccountDropdown />
      </div>
    </nav>
  );
};

export default Header;

