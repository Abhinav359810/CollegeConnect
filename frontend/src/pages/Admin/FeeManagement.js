import React, { useState } from 'react';
import { Container, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const FeesManagement = () => {
  const [fees, setFees] = useState([]);
  const [form, setForm] = useState({ studentName: '', amount: '', dueDate: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFees([...fees, form]);
    setForm({ studentName: '', amount: '', dueDate: '' });
  };

  return (
    <Container>
      <h2>Fees Management</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Student Name"
          name="studentName"
          value={form.studentName}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Amount"
          name="amount"
          value={form.amount}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Due Date"
          name="dueDate"
          type="date"
          value={form.dueDate}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add Fee
        </Button>
      </form>
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student Name</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Due Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fees.map((fee, index) => (
              <TableRow key={index}>
                <TableCell>{fee.studentName}</TableCell>
                <TableCell>{fee.amount}</TableCell>
                <TableCell>{fee.dueDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default FeesManagement;