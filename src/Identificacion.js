import React, { useState } from 'react';
import './css/App.css';
import { Link } from 'react-router-dom';

function Identificacion() {
  const [nombre, setNombre] = useState("");
  const [rut, setRut] = useState("");
  const [examen, setExamen] = useState("");
  const [medico, setMedico] = useState("");
  const [motivo, setMotivo] = useState("");

  return (
    <div className="main-container">
      <div className="cuadrito" id="cuadradito">
        <h1 className="h1">IDENTIFICACIÓN DEL PACIENTE</h1>
        <div className='casilla1-2' id='casilla1-2'>
          <div className="opciones">
            <label>
              <p>Nombre del paciente</p>
              <input type="text" className="casilla1" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </label>
          </div>
          <div className="opcion">
            <label>
              <p>RUT</p>
              <input type="text" className="casilla1" value={rut} onChange={(e) => setRut(e.target.value)} />
            </label>
          </div>
        </div>

        <div className="botop" id="botop">
            <Link to="/datos">
                <input type="submit" className="button1" value="OBTENER DATOS" />
            </Link>
          
        </div>
      </div>
    </div>
  );
}

export default Identificacion;
