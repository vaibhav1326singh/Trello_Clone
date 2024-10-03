import { useEffect, useState } from 'react';
import axios from 'axios';

const Filter = () => {
  const [boardName, setBoardName] = useState('');

  const fetchBoardName = async () => {
    try {
      const headers = {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      };
      const response = await axios.get('http://localhost:5000/api/v1/board/boardname', { headers });
      setBoardName(response.data.boardName);
    } catch (error) {
      console.error('Error fetching board name:', error);
    }
  };

  
  useEffect(() => {
    
    fetchBoardName();
  }, []);
  
// console.log(boardName)
  return (
    <div className="bg-pink-500 text-white flex items-center justify-between p-3">
      <div>
        <h1 className="text-xl font-bold">{boardName || 'Loading...'}</h1>

      </div>
      <div className="space-x-4">
        <button className="bg-pink-600 px-4 py-2 rounded-lg hover:bg-pink-700">Create</button>
        <button className="px-4 py-2">Filter</button>
        <button className="px-4 py-2">Share</button>
        <button className="px-4 py-2">A</button>
      </div>
    </div>
  );
};

export default Filter;
