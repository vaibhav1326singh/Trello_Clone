import Header from './DashHeader';
import Sidebar from './Sidebar';
import Body from './Body';
import { useEffect } from 'react';

const Dashboard = () =>{
    // useEffect(() =>{
    //     return () =>{
    //         localStorage.removeItem("boardName")
    //     }
    // },[])
    return(
    <div className='dashboard h-screen flex flex-col'>
        <Header/>
        <div className='flex flex-grow'>
        
    <Sidebar/>
    <Body/>
            
        </div>
    </div>
    )
    
  
  
  
}




export default Dashboard;