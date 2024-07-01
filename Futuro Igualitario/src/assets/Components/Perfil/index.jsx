import React from "react";
import "./Perfil.css";

function Perfil() {
  return (
    <div className="perfil-content">
      <div className="perfil-header">
        <h1>PERFIL</h1>
      </div>
      <div className="profile-content">
        <div className="profile-info">
          <div className="perfil-detalles">
            <p><strong>Nombre:</strong> Ana Belen Nuñez Hernandez</p>
            <div className="profile-picture">
              <img src="path/to/profile-picture.png" alt="Foto de perfil" />
            </div>
            <p><strong>Fecha de nacimiento:</strong> XX/XX/XXXX</p>
            <p><strong>Estado civil:</strong> Casada</p>
            <p><strong>Lugar de residencia:</strong> 15 Sur Oriente Col. Palmas</p>
            <p><strong>Ocupación:</strong> Estudiante</p>
          </div>
        </div>
        <div className="resumen-cita">
          <h2>RESUMEN DE LA CIT</h2>
          <div className="detalles-cita">
            <div className="tipo-cita">
              <p><strong>Tipo de cita:</strong> Juridica</p>
              <p><strong>Fecha de la cita:</strong> XX/XX/XXXX</p>
              <p><strong>Hora de la cita:</strong> 00:00</p>
            </div>
            <div className="tipo-cita2">
              <p><strong>Tipo de cita:</strong> Psicologica</p>
              <p><strong>Fecha de la cita:</strong> XX/XX/XXXX</p>
              <p><strong>Hora de la cita:</strong> 00:00</p>
            </div>
          </div>
        </div>
        <div className="seguimiento-denuncias">
          <h2>SEGUIMIENTO DE LA DENUNCIA</h2>
          <div className="detalles-denuncias">
            <p><strong>Estatus:</strong> En seguimiento</p>
            <p><strong>Motivo:</strong> Agresión física</p>
          </div>
        </div>
      </div>
      <div className="action-buttons">
        <div className="modificar-personal">
          <h1>¿DESEA EDITAR ALGUN DATO PERSONAL?</h1>
          <button>EDITAR DATOS</button>
        </div>
        <div className="asesorias">
          <h1>ASESORATES CON NUESTROS EXPERTOS</h1>
          <button>CITA</button>
        </div>
        <div className="contactos">
          <h1>¿USTED HA SIDO AGREDIDA?</h1>
          <button>DENUNCIAS</button>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
