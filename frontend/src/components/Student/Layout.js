import React from 'react';
import { useLocation } from 'react-router-dom';
import CustomNavbar from '../Navbar';
import Footer from '../Footer';
import AdminNavbar from '../Admin/Navbar';

function Layout({ children }) {
  const location = useLocation();
  
  const isDashboard = location.pathname.startsWith('/student-dashboard') ||
                      location.pathname.startsWith('/admin-dashboard') ||
                      location.pathname.startsWith('/teacher-dashboard');

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Conditionally render CustomNavbar */}
      {!isDashboard && <CustomNavbar />}
      <div className="content flex-grow-1">{children}</div>
      {!isDashboard && <Footer />} {/* Optionally hide the footer on dashboard pages */}
    </div>
  );
}

export default Layout;
