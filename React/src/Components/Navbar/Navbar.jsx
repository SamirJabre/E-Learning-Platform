import React from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar-container">
        <div className="navbar-content">
            <button onClick={()=>{navigate('/home')}}>Home</button>
            <button onClick={()=>{navigate('/courses')}}>Courses</button>
            <button>Log Out</button>
        </div>
    </div>
  )
}

export default Navbar