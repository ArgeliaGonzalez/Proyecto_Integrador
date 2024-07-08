import React from "react";

function RegistroEconomico({ handleChange }) {
  return (
    <div className="form-group">
      <label htmlFor="ingresos" className="label">Ingresos</label>
      <input type="text" id="ingresos" className="input" onChange={handleChange} />
      
      <label htmlFor="gastos" className="label">Gastos</label>
      <input type="text" id="gastos" className="input" onChange={handleChange} />
      
      <label htmlFor="deudas" className="label">Deudas</label>
      <input type="text" id="deudas" className="input" onChange={handleChange} />
    </div>
  );
}

export default RegistroEconomico;
