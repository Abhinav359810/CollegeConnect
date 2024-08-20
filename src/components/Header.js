import React from 'react';
import './CSS/Header.css';

function Header() {
  return (
    <nav className="header">
      <div className="logo">CollegeConnect</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Header;
