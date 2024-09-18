import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from 'lucide-react';



const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuToggle = (menu) => {
    setActiveMenu(menu === activeMenu ? null : menu);
  };

  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-8 w-auto"
                src="/logo.svg"
                alt="Logo"
              />
            </div>

            <div className=" sm:ml-2 sm:flex sm:space-x-20 text-xl">
              <button className="ml-3"
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuToggle("features");
                }}
                active={activeMenu === "features"}
              >
                Features
                <ChevronDown className="h-3 w-3" />
              </button>
              <button
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuToggle("solutions");
                }}
                active={activeMenu === "solutions"}
              >
                Solutions
                <ChevronDown className="h-5 w-5" />
              </button>
              <button
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuToggle("plans");
                }}
                active={activeMenu === "plans"}
              >
                Plans
                <ChevronDown className="h-5 w-5" />
              </button>
              <button
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuToggle("pricing");
                }}
                active={activeMenu === "pricing"}
              >
                Pricing
                <ChevronDown className="h-5 w-5" />
              </button>
              <button
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuToggle("resources");
                }}
                active={activeMenu === "resources"}
                
              >
                Resources
                <ChevronDown className="h-5 w-5" />
              </button>
            </div>
          </div>

          
          <div className="ml-auto flex items-center space-x-4">
            <Link
              to="/login"
              className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="bg-indigo-500 hover:bg-indigo-700 text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Get Trello for free
            </Link>
          </div>
        </div>
      </div>

      
      {activeMenu === "features" && <FlyoutMenu title="Features" />}
      {activeMenu === "solutions" && <FlyoutMenu title="Solutions" />}
      {activeMenu === "plans" && <FlyoutMenu title="Plans" />}
      {activeMenu === "pricing" && <FlyoutMenu title="Pricing" />}
      {activeMenu === "resources" && <FlyoutMenu title="Resources" />}
    </header>
  );
};

const FlyoutMenu = ({ title }) => {
  const menuItems = {
    Features: [
      { name: "Feature 1", description: "Feature 1 description" },
      { name: "Feature 2", description: "Feature 2 description" },
      { name: "Feature 3", description: "Feature 3 description" },
    ],
    Solutions: [
      {
        name: "Analytics",
        description: "Get a better understanding of where your traffic is coming from",
      },
      {
        name: "Engagement",
        description: "Speak directly to your customers with our engagement tool",
      },
      {
        name: "Security",
        description: "Your customers' data will be safe and secure",
      },
      {
        name: "Integrations",
        description: "Connect with third-party tools that you're already using",
      },
    ],
    Plans: [
      { name: "Plan 1", description: "Plan 1 description" },
      { name: "Plan 2", description: "Plan 2 description" },
      { name: "Plan 3", description: "Plan 3 description" },
    ],
    Pricing: [
      { name: "Pricing 1", description: "Pricing 1 description" },
      { name: "Pricing 2", description: "Pricing 2 description" },
      { name: "Pricing 3", description: "Pricing 3 description" },
    ],
    Resources: [
      { name: "Resource 1", description: "Resource 1 description" },
      { name: "Resource 2", description: "Resource 2 description" },
      { name: "Resource 3", description: "Resource 3 description" },
    ],
  };

  return (
    <div className="absolute left-0 right-0 bg-white shadow-lg z-10 mt-2 rounded-md py-6 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
        {menuItems[title].map((item, index) => (
          <div key={index} className="text-center">
            <div className="text-lg font-medium text-gray-900">{item.name}</div>
            <div className="mt-2 text-sm text-gray-500">{item.description}</div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-between items-center">
        <button className="text-gray-900 text-sm font-medium flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          Watch demo
        </button>
        <button className="text-gray-900 text-sm font-medium flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12h2m0 0h2m-2 0v2m0-2v-2m-6 6H3v2a1 1 0 001 1h5m4-5V9a1 1 0 00-1-1H6m8-4h4v4m-4 0V5"
            />
          </svg>
          Contact sales
        </button>
        <button className="text-gray-900 text-sm font-medium flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
          View all products
        </button>
      </div>
    </div>
  );
};

export default Navbar;
