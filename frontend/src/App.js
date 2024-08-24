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
import StudentNavbar from './components/Student/StudentNavbar';
import StudentNotifications from './components/Student/StudentNotifications';
import Events from './pages/Student/Events';

// Teacher Dashboard Components
import TeacherDashboard from './pages/Teacher/Dashboard';
import TeacherNavbar from './components/Teacher/Navigation'
import TeacherSidebar from './components/Teacher/Sidebar';
import TeacherNotifications from './components/Teacher/TeacherNotifications';

// Admin Dashboard Components
import AdminDashboard from './components/Admin/AdminDashboard';
import AdminSidebar from './components/Admin/AdminSidebar';
import AdminNotifications from './components/Admin/AdminNotifications';
import AdminMessaging from './components/Admin/AdminMessaging';
import UserProfile from './components/Admin/userProfiles';
import UserManagement from './components/Admin/UserManagement';
import ExamManagement from './pages/Admin/ExamManagement';
import { Nav, Navbar } from 'react-bootstrap';
import AdminNavbar from './components/Admin/AdminNavbar';
import FeesManagement from './pages/Admin/FeeManagement';
import CourseManagement from './pages/Admin/CourseManagement';

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
              <AdminNavbar /> 
              <div style={{ marginLeft: '240px', padding: '20px', width: '100%' }}>
                <Routes>
                  <Route path="/" element={<AdminDashboard />} />
                  <Route path="/students" element={<StudentList />} />
                  <Route path="notifications" element={<AdminNotifications />} />
                  <Route path="messaging" element={<AdminMessaging />} />
                  <Route path="/user-management" element={<UserManagement/>} />
                  <Route path="/examination-management" element={<ExamManagement />} />
                  <Route path="/fee-payment-management" element={<FeesManagement />} />
                  <Route path="/course-management" element={<CourseManagement />} />
                  <Route path="/user-profile/:userId/:collegeId/:role" element={<UserProfile />} /> {/* Add this route */}
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
              <TeacherNavbar />
              <div className="dashboard-content">
                <Routes>
                  <Route path="/" element={<TeacherDashboard />} />
                  <Route path="events" element={<Events />} />
                  <Route path="notifications" element={<TeacherNotifications />} />
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
              <StudentNavbar/>
              <div className="dashboard-content">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="students" element={<StudentList />} />
                  <Route path="Notifications" element={<StudentNotifications />} />
                  <Route path="events" element={<Events />} />
                  
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