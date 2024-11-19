import React from "react"
import './Card.css'

export default function Card({nombre, precio, img}) {
    return(
        <>
        <div className="contenedor">
            <img src={img} alt="" />
            <h1>{nombre}</h1>
            <h2>{precio}</h2>
            <button className="tallas">L</button>
            <button className="tallas">M</button>
            <button className="tallas">XL</button>
            <button className="comprar">Comprar</button>
        </div>
        </>
    )
    
}