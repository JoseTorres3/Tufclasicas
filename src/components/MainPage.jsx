import React from 'react'
import Card from './Card'
import './MainPage.css'


export default function MainPage({ camisetas }) {
    return (
        <>
            <section className='bk'>
                <h1>TUFCLASICAS</h1>
                <div className="container">
                    {camisetas.map(({ id, img }) => (
                        <Card key={id} img={img} />
                    ))}
                </div>
            </section>
        </>
    )
}