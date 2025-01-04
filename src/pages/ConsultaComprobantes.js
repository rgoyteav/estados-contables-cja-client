import React from 'react';
import './styles.css'; // Asegúrate de tener el archivo CSS

const ConsultaComprobantes = () => {
  const comprobantes = [
    { fecha: '2025-01-01', numero: '001', tipo: 'Factura', proveedor: 'Juan Pérez', formaPago: 'Banco', monto: 5000 },
  ];

  return (
    <div className="consulta-container">
      <h1>Consulta de Comprobantes</h1>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Número</th>
            <th>Tipo</th>
            <th>Proveedor</th>
            <th>Forma de Pago</th>
            <th>Monto</th>
          </tr>
        </thead>
        <tbody>
          {comprobantes.map((c, index) => (
            <tr key={index}>
              <td>{c.fecha}</td>
              <td>{c.numero}</td>
              <td>{c.tipo}</td>
              <td>{c.proveedor}</td>
              <td>{c.formaPago}</td>
              <td>{c.monto}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConsultaComprobantes;
