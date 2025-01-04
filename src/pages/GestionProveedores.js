import React, { useState } from 'react';
import './styles.css'; // Asegúrate de tener el archivo CSS

const GestionProveedores = () => {
  const [proveedores, setProveedores] = useState([
    { id: 1, nombre: 'Juan Pérez', concepto: 'Deportes' },
  ]);
  const [formData, setFormData] = useState({ id: null, nombre: '', concepto: '' });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddOrEdit = () => {
    if (isEditing) {
      setProveedores(proveedores.map((p) => (p.id === formData.id ? formData : p)));
    } else {
      setProveedores([...proveedores, { ...formData, id: Date.now() }]);
    }
    resetForm();
  };

  const handleEdit = (proveedor) => {
    setFormData(proveedor);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setProveedores(proveedores.filter((p) => p.id !== id));
  };

  const resetForm = () => {
    setFormData({ id: null, nombre: '', concepto: '' });
    setIsEditing(false);
  };

  return (
    <div className="gestion-container">
      <h1>Gestión de Proveedores</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddOrEdit();
        }}
      >
        <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
        <input type="text" name="concepto" placeholder="Concepto" value={formData.concepto} onChange={handleChange} required />
        <button type="submit">{isEditing ? 'Actualizar' : 'Agregar'}</button>
        {isEditing && <button onClick={resetForm}>Cancelar</button>}
      </form>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Concepto</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {proveedores.map((p) => (
            <tr key={p.id}>
              <td>{p.nombre}</td>
              <td>{p.concepto}</td>
              <td>
                <button onClick={() => handleEdit(p)}>Editar</button>
                <button onClick={() => handleDelete(p.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GestionProveedores;
