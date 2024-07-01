import React from "react";
import "./Agendarcita.css";

function Agendarcita() {
    return (
        <div className="content">
            <div className="title">Agenda tu cita</div>
            <div className="seccion1">
                <div className="cita1">Agendar cita psicológica</div>
                <div className="imagen1">
                    <img src="https://www.example.com/imagen1.jpg" alt="Imagen 1" />
                </div>
                <button className="agendar1">Agendar</button>
            </div>
            <div className="seccion2">
                <div className="cita2">Agendar cita jurídica</div>
                <div className="imagen2">
                    <img src="https://www.example.com/imagen2.jpg" alt="Imagen 2" />
                </div>
                <button className="agendar2">Agendar</button>
            </div>
        </div>

    )
}

export default Agendarcita;