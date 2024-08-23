import React from 'react';
import '../../assets/CSS/Student/QuickLinks.css';

function QuickLinks() {
  return (
    <div className="quick-links">
      <h2>Quick Links</h2>
      <div className="links-container">
        <a href="#email" className="link-card">
          <i className="fas fa-envelope"></i>
          <p>Email</p>
        </a>
        <a href="#library" className="link-card">
          <i className="fas fa-book"></i>
          <p>Library</p>
        </a>
        <a href="#calendar" className="link-card">
          <i className="fas fa-calendar-alt"></i>
          <p>Calendar</p>
        </a>
      </div>
    </div>
  );
}

export default QuickLinks;
