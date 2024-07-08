import React from "react";

function ApoyosSociales() {
    return (
        <div className="content">
            <div className="titulo">
                <h1>APOYOS SOCIALES DISPONIBLES</h1>
            </div>
            <EventSection
                imageSrc="https://www.example.com/imagen1.jpg"
                altText="Evento1"
                details="Detalles del evento 1"
                buttonText="Quiero participar!"
                buttonClassName="quiero-participar"
            />
            <EventSection
                imageSrc="https://www.example.com/imagen2.jpg"
                altText="Evento2"
                details="Detalles del evento 2"
                buttonText="Quiero participar!"
                buttonClassName="quiero-participar"
            />
            <EventSection
                imageSrc="https://www.example.com/imagen3.jpg"
                altText="Evento3"
                details="Detalles del evento 3"
                buttonText="Quiero participar!"
                buttonClassName="quiero-participar"
            />
            <Button className="ver-mas">Ver más apoyos</Button>
        </div>
    );
}

export default ApoyosSociales;