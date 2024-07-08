
import React from "react";


function RegistroVivienda({ handleChange }) {
  return (
    <div className="form-group">
      <label htmlFor="tipoVivienda" className="label">Tipo de Vivienda</label>
      <input type="text" id="tipoVivienda" className="input" onChange={handleChange} />
      
      <label htmlFor="direccion" className="label">Dirección</label>
      <input type="text" id="direccion" className="input" onChange={handleChange} />
      
      <label htmlFor="propietario" className="label">Propietario</label>
      <input type="text" id="propietario" className="input" onChange={handleChange} />
    </div>
  );
}

export default RegistroVivienda;
