import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { CalendarPicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const Events = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Events Calendar
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <CalendarPicker date={selectedDate} onChange={(newDate) => setSelectedDate(newDate)} />
        </Box>
      </LocalizationProvider>
      <Typography variant="h6" sx={{ marginTop: '20px', textAlign: 'center' }}>
        Selected Date: {selectedDate.toDateString()}
      </Typography>
    </Container>
  );
};

export default Events;