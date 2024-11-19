import React from "react";
import './App.css'
import logo from '../assets/logo.jpg'

export function Sugerencias() {
    return (
        <body>
             <div className="sugerencia">
            <img src={logo} className="tuflogo" />
            <h3 className="tit">
                Sugerencias
            </h3>
            <textarea className="texta"></textarea>


            <div>
                <h3 className="tit2">
                    Contáctanos
                </h3>
                <form class="form">
                    <input type="text" name="nombre" placeholder="Ingrese su nombre." className="nombre" required/>
                    <input type="email" name="correo" placeholder="Ingrese su correo." className="correo" required/>
                    <button type="submit" class="submit-button">Enviar</button>
                </form>

            </div>
        </div>
        </body>
       
    )
}