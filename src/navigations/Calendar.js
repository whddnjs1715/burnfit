import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import CalendarApp from '../components/body/CalendarApp';

function Calendar() {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <CalendarApp date={date} />
    </>
  );
}

export default Calendar;
