import React from 'react';
import { Card } from 'react-bootstrap';
import '../../assets/CSS/StatsCard.css';

function StatsCard({ title, value, icon }) {
  return (
    <Card className="stats-card">
      <Card.Body>
        <div className="stats-icon">
          {icon}
        </div>
        <div className="stats-info">
          <h5>{title}</h5>
          <h2>{value}</h2>
        </div>
      </Card.Body>
    </Card>
  );
}

export default StatsCard;
