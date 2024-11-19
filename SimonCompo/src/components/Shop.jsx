import React from "react"
import Card from './Card.jsx'
import '../components/Shop.css'

export default function Shop({camisas}) {
    return(
        <>
        <section className="card">
            <div>
                {camisas.map(({id,nombre,precio,img})=>(
                    <Card key={id} nombre={nombre} precio={precio} img={img} />
                ))}
            </div>
        </section>
        </>
    )
}
