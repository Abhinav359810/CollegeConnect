import React from 'react';
import { Table, Button } from 'react-bootstrap';
import '../../assets/CSS/UserTable.css';

function UserTable() {
  return (
    <Table responsive className="user-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>John Doe</td>
          <td>john@example.com</td>
          <td>Student</td>
          <td>
            <Button variant="outline-primary" size="sm">Edit</Button>{' '}
            <Button variant="outline-danger" size="sm">Delete</Button>
          </td>
        </tr>
        {/* Additional user rows can be added here */}
      </tbody>
    </Table>
  );
}

export default UserTable;
