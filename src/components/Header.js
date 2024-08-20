import React from 'react';
import './CSS/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">CollegeConnect</div>
      
      {/* Move the nav-links to the left */}
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      
      {/* Auth buttons on the right */}
      <div className="auth-buttons">
        <button className="btn">Login</button>
        <button className="btn">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
