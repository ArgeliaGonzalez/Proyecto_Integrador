import React from "react";
import "./Registrarusuaria.css";

function Registrousuaria(){
    return(
        <div className="content">
        <h1 className="title">REGISTRO DE USUARIA</h1>
        <div className="content2">
            <div className="content3">
                <label htmlFor="apellidoP" className="label">Apellido Paterno</label>
                <input type="text" id="apellidoP" className="input"/>
                
                <label htmlFor="nombre" className="label">Nombre(s)</label>
                <input type="text" id="nombre" className="input"/>
    
                <label htmlFor="estadoCivil" className="label">Estado Civil</label>
                <input type="text" id="estadoCivil" className="input"/>
            </div>
            <div className="content4">
                <label htmlFor="apellidoM" className="label">Apellido Materno</label>
                <input type="text" id="apellidoM" className="input"/>
    
                <label htmlFor="direccion" className="label">Dirección</label>
                <input type="text" id="direccion" className="input"/>
    
                <label htmlFor="ocupacion" className="label">Ocupación</label>
                <input type="text" id="ocupacion" className="input"/>
            </div>
        </div>
    </div>
    )
}

export default Registrousuaria;
