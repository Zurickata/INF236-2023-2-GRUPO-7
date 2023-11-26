import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './css/calendario.css';
import { Link } from 'react-router-dom';
const HoraSelector = ({ hora, setHora }) => {
  const handleChange = event => {
    setHora(event.target.value);
  };

  return (
    <select value={hora} onChange={handleChange}>
      <option value="08:00">08:00</option>
      <option value="09:00">09:00</option>
      <option value="10:00">10:00</option>
      <option value="11:00">11:00</option>
      <option value="12:00">12:00</option>
      <option value="13:00">13:00</option>
      <option value="14:00">14:00</option>
      <option value="15:00">15:00</option>
      <option value="16:00">16:00</option>
      <option value="17:00">17:00</option>
      <option value="18:00">18:00</option>
      <option value="19:00">19:00</option>
      <option value="20:00">20:00</option>
     
    </select>
  );
};

const Calendario = () => {
  const [date, setDate] = useState(new Date());
  const [mostrarCalendario, setMostrarCalendario] = useState(false);
  const [nombre, setNombre] = useState('');
  const [horaSeleccionada, setHoraSeleccionada] = useState('08:00');
  const [horaHabilitada, setHoraHabilitada] = useState(false);

  const abrirCalendario = () => {
    setMostrarCalendario(true);
  };

  const cerrarCalendario = () => {
    setMostrarCalendario(false);
  };
  const onChangeFecha = newDate => {
    setDate(newDate);
    setHoraHabilitada(true);
  
    const dayNumber = newDate.getDate();
    const monthNumber = newDate.getMonth() + 1; 
    const yearNumber = newDate.getFullYear();
  
  
    const formattedDate = `${yearNumber}-${monthNumber.toString().padStart(2, '0')}-${dayNumber.toString().padStart(2, '0')}`;
  
   
    setNombre(formattedDate);
  };
  

  const onChangeHora = hora => {
    setHoraSeleccionada(hora);
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
              <Calendar onChange={onChangeFecha} value={date} />
              <button onClick={cerrarCalendario}>Cerrar</button>
              <p>Fecha seleccionada: {date.toDateString()}</p>
            </div>
          )}
        </div>
        <div className='casillap' id='casillap'>
          <label>
            <span>Horario</span>
            {horaHabilitada && (
              <HoraSelector hora={horaSeleccionada} setHora={onChangeHora} />
            )}
          </label>
        </div>
        <div className="bot" id="bot">
          <Link to="/">
            <input type="submit" className="button1" value="Agendar fecha" />
      
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Calendario;