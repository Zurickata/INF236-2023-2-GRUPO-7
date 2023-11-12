import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendario = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div>
      <h1>Calendario</h1>
      <Calendar onChange={onChange} value={date} />
      <p>Fecha seleccionada: {date.toDateString()}</p>
    </div>
  );
};

export default Calendario;
