// src/components/Header.js
import React from 'react';
import './CSS/Header.css';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

function Header() {
  const [user] = useAuthState(auth); // Get the current authentication state

  return (
    <header className="header">
      <div className="logo">CollegeConnect</div>
      
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      
      <div className="auth-buttons">
        {!user ? (
          <>
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
            <Link to="/signup">
              <button className="btn">Sign Up</button>
            </Link>
          </>
        ) : (
          <button className="btn" onClick={() => auth.signOut()}>Logout</button> // Optionally add logout button
        )}
      </div>
    </header>
  );
}

export default Header;
