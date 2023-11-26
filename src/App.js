import logo from './logo.svg';
import { useNavigate } from 'react-router-dom';
import './css/App.css';
import React, { useState } from 'react';

function App() {
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
    <div className="main-container">
      
      <form onSubmit={handleSubmit}>
        <div className="cuadrito" id="cuadradito">
          <h1 className="h1">REGISTRO DE PACIENTE</h1>
          <div className='casilla1-2' id= 'casilla1-2'>
            <div className="opciones">
              <label>
                <p>Nombre del paciente</p>
                <input type="text" className="casilla1" value={nombre} onChange={(e) => setNombre(e.target.value)} />
              </label>
            </div>
            <div className="opcion">
              <label>
                <p> RUT</p>
                <input type="text" className="casilla1" value={rut} onChange={(e) => setRut(e.target.value)} />
              </label>
            </div>
          </div>

          <div className='casilla1-2' id= 'casilla1-2'>
            <div className="opciones" id ="opciones">
              <label>
                <p> Tipo de examen</p>
                <select className="casilla1" value={examen} onChange={(e) => setExamen(e.target.value)}>
                  <option value="Nada"></option>
                  <option value="Imageonología">Imageonología</option>
                  <option value="Kinesiología">Kinesiología</option>
                  <option value="Parto">Parto</option>
                </select>
              </label>
            </div>
            <div className="opcion" id = "opcion">
              <label>
                <p> Médico derivante</p>
                <select className="casilla1" value={medico} onChange={(e) => setMedico(e.target.value)}>
                  <option value="Nada"></option>
                  <option value="Nicolás Barahona">Nicolás Barahona</option>
                  <option value="Maximiliano Bardi">Maximiliano Bardi</option>
                  <option value="Javiera Osorio">Javiera Osorio</option>
                </select>
              </label>
            </div>
          </div>

          <div className="opciones3">
            <label>
              <p> Motivo del examen</p>
              <textarea className="casilla1" value={motivo} onChange={(e) => setMotivo(e.target.value)} />
            </label>
          </div>

          <div class= "boton" id = "boton">
            <input type="submit" className="button1" value="FECHAS DISPONIBLES" />
          </div>
        </div>
      </form>
    </div>      
  );
}
export default App;
