import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Bell } from 'lucide-react';
import axios from "axios"


const BoardName = () => {
  const [boardName, setBoardName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleNavigate = async () => {
    if (boardName.trim() === '') {
      setError('Board name should not be empty.');
    } else {
      setError('');
      try {
        const headers = {
          'Content-Type': 'application/json',
          'Authorization':'Bearer '+ localStorage.getItem("token")
        }
        
        const response = await axios.post('http://localhost:5000/api/v1/board/boardname', { boardName }, {headers});
        console.log(response)
        // console.log('Board saved:', boardName);
        localStorage.setItem("boardName",boardName)
        navigate('/dashboard');
        console.log('Board saved:', boardName);
      } catch (err) {
        console.log('Error saving board:', err);
        setError('Error saving board. Please try again.');
      }
    }
  };
console.log(boardName,"board")
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex items-center">
          <h1 className="text-3xl font-bold">Trello</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 flex">
        <div className="w-1/2 pr-8">
          <h2 className="text-3xl font-bold mb-4">It all starts with the board</h2>
          <p className="text-gray-600 mb-6">
            A board is where work happens in Trello. You'll find your cards, lists, due dates, and more to keep you organized and on track.
          </p>
          <div className="mb-6">
            <label htmlFor="boardName" className="block text-sm font-medium text-gray-700 mb-1">
              Enter a board name
            </label>
            <input
              type="text"
              id="boardName"
              value={boardName}
              onChange={(e) => setBoardName(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="e.g., My Trello board"
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
          <button onClick={handleNavigate} className="bg-blue-600 text-white px-4 py-2 rounded">
            Next
          </button>
        </div>

        
        <div className="w-1/2 flex items-center justify-center">
        {/* <Filter boardName={boardName} /> */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 rounded-full filter blur-xl opacity-50"></div>
            <div className="relative bg-pink-500 rounded-lg shadow-lg p-6 w-96">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <Bell className="w-4 h-4 text-white" />
                  <div className="w-6 h-6 bg-yellow-300 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-white font-semibold mb-4">My Trello board</h3>
              <div className="flex space-x-4">
                <div className="bg-white rounded p-2 w-1/3 h-32"></div>
                <div className="bg-white rounded p-2 w-1/3 h-32"></div>
                <div className="bg-white rounded p-2 w-1/3 h-32"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BoardName;
