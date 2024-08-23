import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/CSS/Teacher/Dashboard.css'; // Import the CSS file
import Navigation from '../../components/Teacher/Navigation.js';

function TeacherDashboard() {
  return (
    <div className="dashboard">
      <header className="header">
        <h1>Teacher Dashboard</h1>
        <Navigation /> {/* Include the Navigation component */}
        <nav className="nav">
          <Link to="/teacher-dashboard/home">Home</Link>
          <Link to="/teacher-dashboard/profile">Profile</Link>
          <Link to="/teacher-dashboard/settings">Settings</Link>
        </nav>
      </header>
      <main className="main-content">
        <section className="overview">
          <h2>Course Management</h2>
          <div className="card">
            <h3>Manage Courses</h3>
            <p>Upload course materials, create assignments, and manage grades.</p>
          </div>
          <div className="card">
            <h3>Student Performance</h3>
            <p>Analytics on student progress and participation.</p>
          </div>
        </section>
        <section className="assignments">
          <h2>Assignments</h2>
          <div className="card">
            <h3>Review Submissions</h3>
            <p>View and grade student assignments.</p>
          </div>
          <div className="card">
            <h3>Feedback Tools</h3>
            <p>Provide feedback to students.</p>
          </div>
        </section>
        <section className="resources">
          <h2>Resources</h2>
          <div className="card">
            <h3>Resource Sharing</h3>
            <p>Share supplementary materials like articles and videos.</p>
          </div>
          <div className="card">
            <h3>Collaborative Projects</h3>
            <p>Create and manage group projects.</p>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 CampusConnect. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default TeacherDashboard;
