import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Dashboard from './Dashboard';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // password state fixed
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/v1/users/login', {
        email,
        password
      }, { withCredentials: true }); 

      // console.log('Login successful:');
      // console.log(response.data.status);
      if(response.status === 200){
        console.log(response)
        localStorage.setItem("token",response.data.
          accessToken
          );
        navigate('/boardname')
      }
      
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Login failed');
      console.error('Error logging in:', error);
    }
    
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/1200px-Trello_logo.svg.png" alt="Trello Logo" className="h-8" />
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-[400px]">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <h1 className="text-center text-xl font-semibold text-[#5E6C84]">Log in to continue</h1>
            {errorMessage && <div className="text-red-500 text-center">{errorMessage}</div>}
            <div className="space-y-6">
              <input
                type="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#0052CC] hover:bg-[#0065FF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Continue
            </button>
          </form>
          <div className="mt-6 text-sm text-center">
            <Link to="/signup" className="text-[#0052CC] hover:text-[#0065FF]">Create an account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
