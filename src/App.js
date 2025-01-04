import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CargaComprobantes from './pages/CargaComprobantes';
import GestionProveedores from './pages/GestionProveedores';
import ConsultaComprobantes from './pages/ConsultaComprobantes';
import Navbar from './Navbar'; // Importa el nuevo componente

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CargaComprobantes />} />
        <Route path="/proveedores" element={<GestionProveedores />} />
        <Route path="/comprobantes" element={<ConsultaComprobantes />} />
      </Routes>
    </Router>
  );
}

export default App;
