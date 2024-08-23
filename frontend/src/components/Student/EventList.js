import React from 'react';
import '../../assets/CSS/Student/EventList.css';

function EventList() {
  return (
    <div className="event-list">
      <h4>Event List</h4>
      <div className="event-item">
        <div className="event-time">Nov 2nd, 2020 | 07:00 - 10:00 PM</div>
        <div className="event-name">Movie Night</div>
        <div className="event-tickets">23 tickets left</div>
      </div>
      <div className="event-item">
        <div className="event-time">Nov 6th, 2020 | 07:00 - 10:00 PM</div>
        <div className="event-name">Color Run</div>
        <div className="event-tickets">17 tickets left</div>
      </div>
      <div className="event-item">
        <div className="event-time">Nov 8th, 2020 | 07:00 - 10:00 PM</div>
        <div className="event-name">Hostage Situation</div>
        <div className="event-tickets">4 tickets left</div>
      </div>
    </div>
  );
}

export default EventList;
