import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Primary School', students: 15 },
  { name: 'Elementary School', students: 21 },
  { name: 'Preschool School', students: 22 },
];

function CalendarAndStats() {
  return (
    <Row>
      <Col md={8}>
        <Card className="calendar-card">
          <Card.Body>
            <h5>Calendar Attendance</h5>
            {/* Replace with your calendar component */}
            <div className="calendar-grid">
              {/* Calendar rows */}
              {[...Array(5)].map((_, rowIndex) => (
                <div key={rowIndex} className="calendar-row">
                  {[...Array(7)].map((_, colIndex) => (
                    <div key={colIndex} className="calendar-day">10</div>
                  ))}
                </div>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="stats-card">
          <Card.Body>
            <h5>Educational Stage</h5>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="students" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default CalendarAndStats;
