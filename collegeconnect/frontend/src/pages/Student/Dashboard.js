import React from 'react';
import WelcomeMessage from '../../components/Student/WelcomeMessage';
import QuickLinks from '../../components/Student/QuickLinks';
import UpcomingDeadlines from '../../components/Student/UpcomingDeadlines';
import Notifications from'../../components/Student/Notifications';
import '../../assets/CSS/Student/Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <WelcomeMessage studentName="John Doe" />
      </div>
      <div className="dashboard-content">
        <QuickLinks />
        <UpcomingDeadlines />
        <Notifications />
      </div>
    </div>
  );
}

export default Dashboard;
