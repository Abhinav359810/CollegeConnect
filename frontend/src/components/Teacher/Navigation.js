// src/components/Teacher/Navigation.js

import React from 'react';
import { NavLink } from 'react-router-dom';
//import './Navigation.css'; // Optional: Add custom CSS styling

function Navigation() {
  return (
    <nav className="teacher-navigation">
      <ul className="nav-list">
        <li>
          <NavLink to="/teacher-dashboard/home" activeClassName="active-link" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/teacher-dashboard/classes" activeClassName="active-link" className="nav-link">
            Classes
          </NavLink>
        </li>
        <li>
          <NavLink to="/teacher-dashboard/assignments" activeClassName="active-link" className="nav-link">
            Assignments
          </NavLink>
        </li>
        <li>
          <NavLink to="/teacher-dashboard/students" activeClassName="active-link" className="nav-link">
            Students
          </NavLink>
        </li>
        <li>
          <NavLink to="/teacher-dashboard/grades" activeClassName="active-link" className="nav-link">
            Grades
          </NavLink>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
}

export default Navigation;
