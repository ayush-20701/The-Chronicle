import React from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
export default function Navbar() {
  return ( 
    <div className="navbar">
      <div className="title subNav"><NavLink className="nav-link" to="/">The Chronicle</NavLink></div>
      <div className="subNav categories">
          <div className="about"><NavLink className="nav-link" to="/about">About</NavLink></div>
          <div className="sports"><NavLink className="nav-link" to="/sports">Sports</NavLink></div>
          <div className="business"><NavLink className="nav-link" to="/business">Business</NavLink></div>
          <div className="technology"><NavLink className="nav-link" to="/technology">Technology</NavLink></div>
          <div className="entertainment"><NavLink className="nav-link" to="/entertainment">Entertainment</NavLink></div>
          <div className="science"><NavLink className="nav-link" to="/science">Science</NavLink></div>
          <div className="health"><NavLink className="nav-link" to="/health">Health</NavLink></div>
      </div>
      <div className="search subNav subNav2">
          <input type="text" placeholder='keywords...'/>
          <button type='submit'>Search</button>
      </div>
    </div>
  )
}