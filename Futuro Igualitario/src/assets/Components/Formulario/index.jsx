import React, { useState } from "react";
import Usuarios from "../Usuarios/Usuarios";
import RegistroEconomico from "../RegistroEconomico";
import RegistroVivienda from "../Datosvivienda/Datosvivienda";
import "./Formulario.css";

function Formulario() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidoP: '',
    apellidoM: '',
    direccion: '',
    telefono: '',
    email: '',
    ingresos: '',
    gastos: '',
    deudas: '',
    tipoVivienda: '',
    propietario: ''
  });

  const [tipoRegistro, setTipoRegistro] = useState("usuarios");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSelectChange = (e) => {
    setTipoRegistro(e.target.value);
  };

  return (
    <div className="content">
      <h1 className="title">Registro</h1>
      <div className="select-container">
        <label htmlFor="tipoRegistro" className="label">Tipo de Registro</label>
        <select id="tipoRegistro" className="select" onChange={handleSelectChange}>
          <option value="usuarios">Usuarios</option>
          <option value="economico">Datos Económicos</option>
          <option value="vivienda">Datos de Vivienda</option>
        </select>
      </div>
      <div className="form-container">
        {tipoRegistro === "usuarios" && <Usuarios handleChange={handleChange} />}
        {tipoRegistro === "economico" && <RegistroEconomico handleChange={handleChange} />}
        {tipoRegistro === "vivienda" && <RegistroVivienda handleChange={handleChange} />}
      </div>
    </div>
  );
}

export default Formulario;
