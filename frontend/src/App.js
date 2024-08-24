import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Student/Layout';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Register from './pages/Register';
import SignUp from './pages/SignUp';
import SetPassword from './pages/SetPassword';
import CustomNavbar from './components/Navbar';

// Student Dashboard Components
import Sidebar from './components/Student/Sidebar';
import Dashboard from './pages/Student/Dashboard';
import StudentList from './components/Student/StudentList';

// Teacher Dashboard Components
import TeacherDashboard from './pages/Teacher/Dashboard';

//Admin Dashboard
import AdminDashboard from './components/Admin/AdminDashboard';
import Navigationbar from './components/Admin/Navbar';
import { Nav, Navbar } from 'react-bootstrap';

function App() {
  return (
    <Router>
        <Layout>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/set-password/:id" element={<SetPassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-up" element={<SignUp />} />

        {/* Admin Dashboard Layout */}
        <Route
          path="/admin-dashboard/*"
          element={
            <div style={{ display: 'flex' }}>
              <Sidebar />
              <Navigationbar /> 
              <div style={{ marginLeft: '240px', padding: '20px', width: '100%' }}>
                <Routes>
                  <Route path="/" element={<AdminDashboard />} />
                  <Route path="students" element={<StudentList />} />
                  {/* Add more routes for other admin functionalities */}
                </Routes>
              </div>
            </div>
          }
        />

        {/* Teacher Dashboard Layout */}
        <Route
          path="/teacher-dashboard/*"
          element={
            <div className="dashboard">
              <Sidebar />
              <div className="dashboard-content">
                <Routes>
                  <Route path="/" element={<TeacherDashboard />} />
                  {/* Add more teacher-specific routes here */}
                </Routes>
              </div>
            </div>
          }
        />

        {/* Student Dashboard Layout */}
        <Route
          path="/student-dashboard/*"
          element={
            <div className="dashboard">
              <Sidebar />
              <div className="dashboard-content">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="students" element={<StudentList />} />
                  {/* Add more student-specific routes here */}
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;
