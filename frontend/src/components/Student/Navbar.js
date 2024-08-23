import React from 'react';
import '../../assets/CSS/Student/Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">CampusConnect</div>
      <div className="navbar-icons">
        <i className="fas fa-bell"></i>
        <i className="fas fa-envelope"></i>
        <i className="fas fa-user-circle"></i>
      </div>
    </div>
  );
}

export default Navbar;
