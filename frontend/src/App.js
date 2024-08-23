import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Student/Layout';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Register from './pages/Register';
import SetPassword from './pages/SetPassword';

// Student Dashboard Components
import Sidebar from './components/Student/Sidebar';
import Navbar from './components/Student/Navbar';
import Home from './pages/Student/Dashboard';
import Classes from './pages/Student/Classes';
import Students from './pages/Student/Students';
import Teachers from './pages/Student/Teachers';
import Exams from './pages/Student/Exams';
import Fees from './pages/Student/Fees';
import NewsEvents from './pages/Student/NewsEvents';
import './assets/CSS/Dashboard.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/set-password/:id" element={<SetPassword />} />
          <Route path="/contact" element={<Contact />} />

          {/* Student Dashboard Layout */}
          <Route
            path="/student-dashboard/*"
            element={
              <div className="dashboard">
                <Sidebar />
                <div className="dashboard-content">
                  <Navbar /> {/* This is the Navbar specific to the student dashboard */}
                  <Routes>
                    <Route path="home" element={<Home />} />
                    <Route path="classes" element={<Classes />} />
                    <Route path="students" element={<Students />} />
                    <Route path="teachers" element={<Teachers />} />
                    <Route path="/exam" element={<Exams />} />
                    {/* <Route path="/exam" element={<Exams studentId={currentStudentId} />} /> */}
                    <Route path="fees" element={<Fees />} />
                    <Route path="news-events" element={<NewsEvents />} />
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
