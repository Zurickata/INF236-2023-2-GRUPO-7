import React, { useState } from 'react';
import './css/agendado.css';
import { Link } from 'react-router-dom';

function Agendado() {
  const [nombre, setNombre] = useState("");
  const [rut, setRut] = useState("");
  const [examen, setExamen] = useState("");
  const [medico, setMedico] = useState("");
  const [motivo, setMotivo] = useState("");

  return (
    <div className="main-container">
      <div className="cuadrito" id="cuadradito">
        <h1 className="h1">Horas Agendadas</h1>
        <div className='casilla1-2' id='casilla1-2'>
          <div className="opcion5">
            <label>
              <p>hora ... informacio</p>
              
              
            </label>
            <div className="botonnp" id="botonnp">
                <Link to="/cancelar-hora">
                    <input type="submit" className="button1" value="Cancelar hora" />
                </Link>
        
            </div>
          </div>
          <div className="opcion5">
            <label>
              <p>hora ... informacion</p>
            </label>
            <div className="botonnp" id="botonnp">
                <Link to="/cancelar-hora">
                    <input type="submit" className="button1" value="Cancelar hora" />
                </Link>
            
                </div>
              
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

export default Agendado;
