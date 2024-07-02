import React from "react";
import "./Apoyossociales.css";

function Apoyossociales() {
    return (
        <div className="content">
            <div className="titulo1">
              <h1>APOYOS SOCIALES DISPONIBLES</h1>
            </div>
            <div className="section1">
                <div className="imagen1">
                    <img src="ttps://www.example.com/imagen1.jpg" alt="Evento1" />
                </div>
                <p><strong>Detalles del evento</strong></p>
                <button className="quieroparticipar1">Quiero participar!</button>
            </div>
            <div className="section2">
                <div className="imagen2">
                    <img src="ttps://www.example.com/imagen1.jpg" alt="Evento2" />
                </div>
                <p><strong>Detalles del evento</strong></p>
                <button className="quieroparticipar2">Quiero participar!</button>
            </div>
            <div className="section3">
                <div className="imagen3">
                    <img src="ttps://www.example.com/imagen1.jpg" alt="Evento3" />
                </div>
                <p><strong>Quiero participar!</strong></p>
                <button className="quieroparticipar3">Quiero participar</button>
            </div>

            <button className="ver-mas">Ver más apoyos</button>

        </div>
    )
}

export default Apoyossociales;