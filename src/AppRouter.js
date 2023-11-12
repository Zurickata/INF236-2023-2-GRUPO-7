import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import CancelarHora from './cancelar_hora.js';
import Calendario from './calendario.js';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cancelar-hora" element={<CancelarHora />} />
        <Route path="/calendario" element={<Calendario/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
