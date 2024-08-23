import React from 'react';
import { useLocation } from 'react-router-dom';
import CustomNavbar from '../Navbar';
import Footer from '../Footer';

function Layout({ children }) {
  const location = useLocation();
  const isStudentDashboard = location.pathname.startsWith('/student-dashboard');

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Conditionally render CustomNavbar */}
      {!isStudentDashboard && <CustomNavbar />}
      <div className="content flex-grow-1">{children}</div>
      {!isStudentDashboard && <Footer />} {/* Optionally hide the footer on student dashboard */}
    </div>
  );
}

export default Layout;
