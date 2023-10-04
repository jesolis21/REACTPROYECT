import React from "react";
import "../styles/estilo.css";
 
function Cardjess(){
    return(
        <div className="contenedor-gral">
          <img
          className="imagenjess"
          src={require("../imagenes/yo.jpg")}
          alt="Foto de Jessica"/>
          <div className="contenedortexto">
            <h2 className="nombre"> Jessica Solis </h2>
            <p className="edad"> 21 años</p>
            <p className="contacto"> Contacto : jessicasolis.ger@gmail.com </p>
            <p className="descripcion"> Estoy estudiando en Generation para certificarme como desarrolladora Full Stack Java en la cohorte 32   </p>


          </div>
    
          </div>
    );
}

export default Cardjess;