import React from "react";
import './Usuarios.css'

function Usuarios({ handleChange }) {
  return (
    <div className="form-group">
      <label htmlFor="nombre" className="label">Nombre</label>
      <input type="text" id="nombre" className="input" onChange={handleChange} />
      
      <label htmlFor="apellidoP" className="label">Apellido Paterno</label>
      <input type="text" id="apellidoP" className="input" onChange={handleChange} />
      
      <label htmlFor="apellidoM" className="label">Apellido Materno</label>
      <input type="text" id="apellidoM" className="input" onChange={handleChange} />
      
      <label htmlFor="direccion" className="label">Dirección</label>
      <input type="text" id="direccion" className="input" onChange={handleChange} />
      
      <label htmlFor="telefono" className="label">Teléfono</label>
      <input type="text" id="telefono" className="input" onChange={handleChange} />
      
      <label htmlFor="email" className="label">Correo Electrónico</label>
      <input type="email" id="email" className="input" onChange={handleChange} />
    </div>
  );
}

export default Usuarios;
