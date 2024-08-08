import { useState } from "react";
import Login from "./Pages/LoginPage/Login"
import Signup from "./Pages/SignupPage/Signup"
import { Provider } from "react-redux";
import store from "./redux/store.js";
import Home from "./Pages/HomePage/Home.jsx";
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Courses from "./Pages/CoursesPage/Courses.jsx";

function App() {
  const [userInfo , setUserInfo] = useState({});
  return (
    <BrowserRouter> 
      <Routes>
        <Route index element={<Login setUserInfo={setUserInfo} userInfo={userInfo}/>} />
        <Route path="/signup" element={<Signup setUserInfo={setUserInfo}/>} />
        <Route path="/home" element={<Home userInfo={userInfo}/>} />
        <Route path="/courses" element={<Courses userInfo={userInfo}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
