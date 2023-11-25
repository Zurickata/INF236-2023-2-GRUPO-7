import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';
import myImage from './menu.jpg'; // Asegúrate de reemplazar esto con la ruta a tu imagen

class Menu extends React.Component {
  render() {
    return (
      <div className="textomenu">
        <h1>Menú</h1>
        <div className="contenedor-imagen">
            <img src={myImage} alt="Mi imagen" style={{width: '50%', height: 'auto'}} /> {/* Aquí es donde se agrega la imagen */}
        </div> 
        <div className="botones">
            <button className="botonmenu">Registrar hora</button>
            <Link to="/cancelar-hora">
              <button className="botonmenu">Cancelar hora</button>
            </Link>
        </div>
      </div>
    );
  }
}

export default Menu;



