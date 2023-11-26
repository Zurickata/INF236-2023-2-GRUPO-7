import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.js';
import CancelarHora from './cancelar_hora.js';
import Calendario from './calendario.js';
import Menu from './menu.js';
import Identificacion from './Identificacion.js';
import DatosPersonales from './datosper.js';
import DatosPaciente from './datospaciente.js';
import Examenes from './examenes.js';
import Agendado from './Horas_agendadas.js';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/App" element={<App />} />
        <Route path="/Identificacion" element={<Identificacion />} />
        <Route path="/datos" element={<DatosPaciente />} />
        <Route path="/datospersonales" element={<DatosPersonales />} />
        <Route path="/examenes" element={<Examenes />} />
        <Route path="/Horas-Agendadas" element={<Agendado />} />

        <Route path="/cancelar-hora" element={<CancelarHora />} />
        <Route path="/calendario" element={<Calendario/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
