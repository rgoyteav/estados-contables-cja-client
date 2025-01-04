import React, { useState, useEffect } from 'react';
import './styles.css'; // Asegúrate de tener el archivo CSS

const CargaComprobantes = () => {
  const [proveedores, setProveedores] = useState([]);
  const [formData, setFormData] = useState({
    fecha: '',
    numero: '',
    tipo: '',
    proveedorId: '',
    formaPago: '',
    monto: '',
  });

  useEffect(() => {
    // Simula la carga de proveedores desde la API
    setProveedores([
      { id: 1, nombre: 'Juan Pérez' },
      { id: 2, nombre: 'Maria Gomez' },
    ]);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
  };

  return (
    <div className="form-container">
      <h1>Carga de Comprobantes</h1>
      <form onSubmit={handleSubmit}>
        <input type="date" name="fecha" onChange={handleChange} required />
        <input type="text" name="numero" placeholder="Número" onChange={handleChange} required />
        <select name="tipo" onChange={handleChange} required>
          <option value="">Tipo de Comprobante</option>
          <option value="Factura">Factura</option>
          <option value="Recibo">Recibo</option>
        </select>
        <select name="proveedorId" onChange={handleChange} required>
          <option value="">Seleccionar Proveedor</option>
          {proveedores.map((p) => (
            <option key={p.id} value={p.id}>{p.nombre}</option>
          ))}
        </select>
        <select name="formaPago" onChange={handleChange} required>
          <option value="">Forma de Pago</option>
          <option value="Caja">Caja</option>
          <option value="MercadoPago">MercadoPago</option>
          <option value="Banco">Banco</option>
          <option value="CuentaCorriente">Cuenta Corriente</option>
        </select>
        <input type="number" name="monto" placeholder="Monto" onChange={handleChange} required />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default CargaComprobantes;
