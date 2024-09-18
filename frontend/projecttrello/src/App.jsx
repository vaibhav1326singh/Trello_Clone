import "./App.css";
import Login from "./Component/loginPage.jsx";
import HomePage from "./Component/Homepage.jsx";
import SignupForm from "./Component/signUpPage.jsx";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Component/Dashboard.jsx";
import BoardName from "./Component/boardName.jsx";


function App() {
  return (
      <div >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/boardname" element={<BoardName/>}/>
        </Routes>
      </div>
  );
}

export default App;
