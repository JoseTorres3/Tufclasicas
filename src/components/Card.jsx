import React from 'react'
import './MainPage.css'


export default function Card({ img }) {
    return (
        <>
            <div className="card">
                <div className="camisa">
                    <img src={img} />
                </div>
            </div>
        </>
    )
}