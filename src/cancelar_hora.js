import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/cancelar_hora.css';
import { Link } from 'react-router-dom';
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
      <div className="cuadritop" id="cuadradito">
      <div>
        <h1 className="h1">MODIFICAR HORA</h1>

        <div className="casilla1-2"> 
          <div className="opciones"> 

            <label>
              Nombre del paciente<br></br>
              <input type="text" className="casilla11" value={nombre} onChange={e => setNombre(e.target.value)} />
            </label>
          </div>
          <div className="opcion">
            <label>
              RUT<br></br>
              <input type="text" className="casilla11" value={rut} onChange={e => setRut(e.target.value)} />
            </label>
          </div>
        </div>

        <div className="casilla1-2">
          <div className="opciones">
            <label>
              Tipo de examen<br></br>
              <select className="casilla11" value={examen} onChange={e => setExamen(e.target.value)}>
                <option value="Nada"></option>
                <option value="Imageonología">Imageonología</option>
                <option value="Kinesiología">Kinesiología</option>
                <option value="Parto">Parto</option>
              </select>
            </label>
          </div>
          <div className="opciones2">
            <label>
              Médico derivante<br></br>
              <select className="casilla11" value={medico} onChange={e => setMedico(e.target.value)}>
                <option value="Nada"></option>
                <option value="Nicolás Barahona">Nicolás Barahona</option>
                <option value="Maximiliano Bardi">Maximiliano Bardi</option>
                <option value="Javiera Osorio">Javiera Osorio</option>
              </select>
            </label>
          </div>
        </div>

        <br></br><br></br>
        
        <div className="opciones3">
          <label>
            Motivo de cancelacion
            <br></br>
            <textarea className="casilla11" value={motivo} onChange={e => setMotivo(e.target.value)} />
          </label>
        </div>

        <br></br><br></br>
        <div class= "boto" id = "boto">
            <input type="submit" className="button1" value="conseguir otra hora" />
        </div>
        <br></br><br></br>
        <div class= "boton2" id = "boton2">
          <Link to="/">
            <input type="submit" className="button1" value="cancelar hora" />
      
          </Link>
        </div>
      
      </div>
      </div>
    </form>
  );
}

export default CancelarHora;
