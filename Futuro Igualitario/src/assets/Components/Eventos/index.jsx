import React from "react";
import "./Eventos.css";

function Eventos() {
    return (
        <div className="content">
            <div className="titulo1">
              <h1>EVENTOS EN CURSO</h1>
            </div>
            <div className="apartado1">
                <div className="imagen1">
                    <img src="ttps://www.example.com/imagen1.jpg" alt="Evento1" />
                </div>
                <p><strong>Detalles del evento</strong></p>
                <button className="participar1">Quiero participar!</button>
            </div>
            <div className="apartado2">
                <div className="imagen2">
                    <img src="ttps://www.example.com/imagen1.jpg" alt="Evento2" />
                </div>
                <p><strong>Detalles del evento</strong></p>
                <button className="participar2">Quiero participar!</button>
            </div>
            <div className="apartado3">
                <div className="imagen3">
                    <img src="ttps://www.example.com/imagen1.jpg" alt="Evento3" />
                </div>
                <p><strong>Quiero participar!</strong></p>
                <button className="participar3">Quiero participar</button>
            </div>

            <button className="ver-mas">Ver más eventos</button>

        </div>
    )
}

export default Eventos;