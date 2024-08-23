import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Student/Layout';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Register from './pages/Register';
import SignUp from './pages/SignUp';
import SetPassword from './pages/SetPassword';

// Student Dashboard Components
import Sidebar from './components/Student/Sidebar';
import Navigationbar from './components/Student/Navbar';
import Home from './pages/Student/Dashboard';
import Classes from './pages/Student/Classes';
import Students from './pages/Student/Students';
import Teachers from './pages/Student/Teachers';
import Exams from './pages/Student/Exams';
import Fees from './pages/Student/Fees';
import NewsEvents from './pages/Student/NewsEvents';
import './assets/CSS/Dashboard.css';

// Teacher Dashboard Components
import TeacherDashboard from './pages/Teacher/Dashboard';

//Admin Dashboard
import AdminDashboard from './components/Admin/AdminDashboard';

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
              <div className="dashboard">
                <Sidebar />
                <div className="dashboard-content">
                  <Navigationbar />
                  <Routes>
                    <Route path="/" element={<AdminDashboard />} />
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
                  <Navigationbar />
                  <Routes>
                    <Route path="home" element={<Home />} />
                    <Route path="classes" element={<Classes />} />
                    <Route path="students" element={<Students />} />
                    <Route path="teachers" element={<Teachers />} />
                    <Route path="exams" element={<Exams />} />
                    <Route path="fees" element={<Fees />} />
                    <Route path="news-events" element={<NewsEvents />} />
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
                
                <div className="dashboard-content">

                  <Routes>
                    <Route path="/" element={<TeacherDashboard />} />

                    {/* Add more teacher-specific routes here */}
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
