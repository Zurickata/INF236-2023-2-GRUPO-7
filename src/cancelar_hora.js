import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/cancelar_hora.css';

function CancelarHora() {
  const [nombre, setNombre] = useState("");
  const [rut, setRut] = useState("");
  const [examen, setExamen] = useState("");
  const [medico, setMedico] = useState("");
  const [motivo, setMotivo] = useState("");

  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate('/calendario');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1 className="h1">EDITAR HORA</h1>

        <div className="opciones">        
          <label>
            Nombre del paciente<br></br>
            <input type="text" className="casilla1" value={nombre} onChange={e => setNombre(e.target.value)} />
          </label>
          <label>
            RUT<br></br>
            <input type="text" className="casilla1" value={rut} onChange={e => setRut(e.target.value)} />
          </label>
        </div>

        <div className="opciones2">
          <label>
            Tipo de examen<br></br>
            <select className="casilla1" value={examen} onChange={e => setExamen(e.target.value)}>
              <option value="Nada"></option>
              <option value="Imageonología">Imageonología</option>
              <option value="Kinesiología">Kinesiología</option>
              <option value="Parto">Parto</option>
            </select>
          </label>
          <label>
            Médico derivante<br></br>
            <select className="casilla1" value={medico} onChange={e => setMedico(e.target.value)}>
              <option value="Nada"></option>
              <option value="Nicolás Barahona">Nicolás Barahona</option>
              <option value="Maximiliano Bardi">Maximiliano Bardi</option>
              <option value="Javiera Osorio">Javiera Osorio</option>
            </select>
          </label>
        </div>

        <br></br><br></br>
        
        <div className="opciones3">
          <label>
            Motivo de cancelacion
            <br></br>
            <textarea className="casilla1" value={motivo} onChange={e => setMotivo(e.target.value)} />
          </label>
        </div>

        <br></br><br></br>
        <div>
          <input type="submit" className="button1" value="FECHAS DISPONIBLES" />
        </div>
      </div>
    </form>
  );
}

export default CancelarHora;
