import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div className="navbar-container">
        <div className="navbar-content">
            <button>Home</button>
            <button>Courses</button>
            <button>Log Out</button>
        </div>
    </div>
  )
}

export default Navbar