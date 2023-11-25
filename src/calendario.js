import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendario.css';

const Calendario = () => {
  const [date, setDate] = useState(new Date());
  const [mostrarCalendario, setMostrarCalendario] = useState(false);
  const [nombre, setNombre] = useState('');

  const abrirCalendario = () => {
    setMostrarCalendario(true);
  };

  const cerrarCalendario = () => {
    setMostrarCalendario(false);
  };

  const onChange = newDate => {
    setDate(newDate);
  };

  return (
    <div>
      <div className='cuadrado'>
        <h1>Disponibilidad</h1>
        <div className='casillap' id='casillap'>
          <label>
            <span>Calendario</span>
            <input
              type="text"
              className="casillap"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
              onFocus={abrirCalendario}
            />
          </label>
          {mostrarCalendario && (
            <div>
              <Calendar onChange={onChange} value={date} />
              <button onClick={cerrarCalendario}>Cerrar</button>
              <p>Fecha seleccionada: {date.toDateString()}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calendario;
