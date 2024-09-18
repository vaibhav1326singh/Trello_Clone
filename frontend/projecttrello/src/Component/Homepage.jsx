

import Navbar from "./Navbar.jsx"





import React from 'react';
import { Bell } from 'lucide-react';
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/1200px-Trello_logo.svg.png" alt="Trello Logo" className="h-8" />
            <Navbar/>
          </div>
          
        </div>
      </header>

      
      

      
      <main className="flex-grow bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Trello brings all your tasks, teammates, and tools together
            </h1>
            <p className="text-xl mb-8">
              Keep everything in the same place—even if your team isn't.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-2 rounded text-gray-800 w-full sm:w-64"
              />
              <Link to="/signup" button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                Sign up - it's free!
              </Link>
            </div>
            <button className="mt-4 text-white underline flex items-center">
              <span className="mr-2">Watch video</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.ctfassets.net/rz1oowkt5gyp/75rDABL8fyMtNLlUAtBxrg/c5e145977a86c41c47e17c69410c64f7/TrelloUICollage_4x.png" alt="Trello Interface" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Homepage;