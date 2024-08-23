import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import '../../assets/CSS/Student/Notifications.css';

function Notifications({ studentId }) {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const q = query(collection(db, "notifications"), where("studentId", "==", studentId));
        const querySnapshot = await getDocs(q);
        const notificationsList = querySnapshot.docs.map(doc => doc.data());
        setNotifications(notificationsList);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, [studentId]);

  return (
    <div className="notifications">
      <h2>Recent Notifications</h2>
      <div className="notification-list">
        {notifications.map((notification, index) => (
          <div key={index} className="notification-item">
            <p>{notification.message}</p>
            <span>{notification.timeAgo}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;
