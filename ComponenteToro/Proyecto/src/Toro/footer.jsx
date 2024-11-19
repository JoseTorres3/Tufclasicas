import React from "react";
import './App.css'
import descarga2 from '../assets/descarga2.png'


export function Footer() {
    return (
        <body>
            <footer className="footer">
                <h3 className="tit1">
                    Ubucación
                </h3>
                <p className="p1">Aranjuez - Álamos </p>

                <h3 className="titu2">
                    Contáctanos
                </h3>
                <p className="contacto">313404505</p>
                <p className="corr">tufclasica@gmail.com</p>
                <h3 className="tit3">
                    Nosotros
                </h3>
                <img src={descarga2} />
                <p className="pie"><strong>© 2024 - Todos los Derechos reservados de Tufclasicas</strong></p>
            </footer>
        </body>

    )
}