import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './escudo-cja.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Logo Juventud Antoniana" className="navbar-logo" />
        <span className="navbar-title">Centro Juventud Antoniana</span>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Carga de Comprobantes</Link></li>
        <li><Link to="/proveedores">Gestión de Proveedores</Link></li>
        <li><Link to="/comprobantes">Consulta de Comprobantes</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
