import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.js';
import CancelarHora from './cancelar_hora.js';
import Calendario from './calendario.js';
import Menu from './menu.js';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/App" element={<App />} />

        <Route path="/cancelar-hora" element={<CancelarHora />} />
        <Route path="/calendario" element={<Calendario/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
