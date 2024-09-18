import Header from './DashHeader';
import Sidebar from './Sidebar';
import Body from './Body';

const Dashboard = () =>{
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