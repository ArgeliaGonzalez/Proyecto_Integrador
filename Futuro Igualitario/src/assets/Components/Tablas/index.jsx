import React from "react";

function Tablas() {
    return (
      <section>
           <table className="table is-bordered">
  <tbody>
    
    {/* columnas */}
  <tr className="is-primary">
       {/* filas */}
        <td>id de usuario</td>
        <td>Apellidos</td>
        
        <td>Nombres</td>
        <td>Fecha de nacimiento</td>
        <td>Correo electronico</td>
        <td>Num de telefono</td>
        <td>Estado civil</td>
        <td>Tipo de usuario</td>
        <td>Estatus</td>
        <td>Acciones</td>

      </tr>
      <tr className="is-primary">
        <td>Link row</td>
        <td>sss</td>
       
        <td>Two</td>
         <td>dfsdf</td>
         <td>jidj</td>
         <td>ufud</td>
         <td>viva nct </td>
         <td>iij</td>
         <td>agsd</td>
         <td>agsd</td>

      </tr>
  </tbody>
</table>
      </section>
     
    );
}

export default Tablas;
