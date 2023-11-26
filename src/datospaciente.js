import React, { useState } from 'react';
import './css/App.css';
import { Link } from 'react-router-dom';
function DatosPaciente() {
  const [nombre, setNombre] = useState("");
  const [rut, setRut] = useState("");
  const [examen, setExamen] = useState("");
  const [medico, setMedico] = useState("");
  const [motivo, setMotivo] = useState("");

  return (
    <div className="main-container">
      <div className="cuadrito" id="cuadradito">
        <h1 className="h1">INFORMACION GENERAL</h1>
        <div className="boton" id="boton">
            <Link to="/datospersonales">
                <input type="submit" className="button1" value="Datos personales" />
            </Link>
          
        </div>
        <div className="boton" id="boton">
            <Link to="/examenes">
                <input type="submit" className="button1" value="Examenes" />
            </Link>
          
        </div>
        <div className="boton" id="boton">
            <Link to="/Horas-Agendadas">
                <input type="submit" className="button1" value="Horas agendadas" />
            </Link>
          
        </div>
      </div>
    </div>
  );
}

export default DatosPaciente;
