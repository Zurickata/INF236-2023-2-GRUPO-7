import React, { useState } from 'react';
import './css/datospersonales.css';
import { Link } from 'react-router-dom';

function DatosPersonales() {
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
          <div className="opcionp">
            <label>
              <p>Nombre del paciente</p>
              
            </label>
          </div>
          <div className="opcionp">
            <label>
              <p>RUT</p>
              
            </label>
          </div>
          <div className="opcionp">
            <label>
              <p>Correo Asociado</p>
              
            </label>
          </div>
          <div className="opcionp">
            <label>
              <p>Cantidad de examenes hechos</p>
              
            </label>
          </div>
        </div>

        <div className="botonn" id="botonn">
            <Link to="/">
                <input type="submit" className="button1" value="Regresar a menú principal" />
            </Link>
          
        </div>
      </div>
    </div>
  );
}

export default DatosPersonales;
