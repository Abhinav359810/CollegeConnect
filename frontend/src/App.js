import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Student/Layout';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Register from './pages/Register';
import SignUp from './pages/SignUp';
import SetPassword from './pages/SetPassword';
import About from './pages/About';

// Student Dashboard Components
import Sidebar from './components/Student/Sidebar';
import Dashboard from './pages/Student/Dashboard';
import StudentList from './components/Student/StudentList';

// Teacher Dashboard Components
import TeacherDashboard from './pages/Teacher/Dashboard';

// Admin Dashboard Components
import AdminDashboard from './components/Admin/AdminDashboard';
import AdminSidebar from './components/Admin/AdminSidebar';
import Navigationbar from './components/Admin/Navbar';
import AdminNotifications from './components/Admin/AdminNotifications';
import AdminMessaging from './components/Admin/AdminMessaging';

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
          <Route path="/about" element={<About />} />

          {/* Admin Dashboard Layout */}
          <Route
            path="/admin-dashboard/*"
            element={
              <div style={{ display: 'flex' }}>
                <AdminSidebar />
                <div style={{ flex: 1, marginLeft: '240px', padding: '20px' }}>
                  <Navigationbar />
                  <Routes>
                    <Route path="/" element={<AdminDashboard />} />
                    <Route path="students" element={<StudentList />} />
                    <Route path="notifications" element={<AdminNotifications />} />
                    <Route path="messaging" element={<AdminMessaging />} />
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
              <div style={{ display: 'flex' }}>
                <Sidebar />
                <div style={{ flex: 1, marginLeft: '240px', padding: '20px' }}>
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
              <div style={{ display: 'flex' }}>
                <Sidebar />
                <div style={{ flex: 1, marginLeft: '240px', padding: '20px' }}>
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
