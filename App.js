import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
function App() {
  const [nombre, setNombre] = useState("");
  const [rut, setRut] = useState("");
  const [examen, setExamen] = useState("");
  const [medico, setMedico] = useState("");
  const [motivo, setMotivo] = useState("");

  const handleSubmit = (event) => {
      event.preventDefault();
  };

  return (
      <form onSubmit={handleSubmit}>
          <div>
            <h1 class = "h1">
              REGISTRO DE PACIENTE
            </h1>


            <div class = "opciones">        
            <label>
                Nombre del paciente<br></br>
                <input type="text" class = "casilla1" value={nombre} onChange={e => setNombre(e.target.value)} />
            </label>
            <label>
                RUT<br></br>
                <input type="text" class = "casilla1" value={rut} onChange={e => setRut(e.target.value)} />
            </label>
            </div>


            <div class = "opciones2">
            <label>
                Tipo de examen<br></br>
                <select class = "casilla1" value={examen} onChange={e => setExamen(e.target.value)}>
                  <option value="Nada"></option>
                  <option value="Imageonología">Imageonología</option>
                  <option value="Kinesiología">Kinesiología</option>
                  <option value="Parto">Parto</option>
                </select>
            </label>
            <label>
                Médico derivante<br></br>
                <select class = "casilla1" value={medico} onChange={e => setMedico(e.target.value)}>
                  <option value="Nada"></option>
                  <option value="Nicolás Barahona">Nicolás Barahona</option>
                  <option value="Maximiliano Bardi">Maximiliano Bardi</option>
                  <option value="Javiera Osorio">Javiera Osorio</option>
                </select>
            </label>
            </div>

            <br></br><br></br>
            
            <div class = "opciones3">
            <label>
                Motivo del examen
                <br></br>
                <textarea class = "casilla1" value={motivo} onChange={e => setMotivo(e.target.value)} />
            </label>
            </div>

            <br></br><br></br>
            <div>
              <input type="submit" class = "button1" value="FECHAS DISPONIBLES" />
            </div>
          </div>
      </form>
  );
}
export default App;