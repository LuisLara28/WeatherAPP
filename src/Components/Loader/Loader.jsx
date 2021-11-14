import React from 'react'
import "./Loader.css"

const Loader = () => {
    return (
        <div className="loader justify-center items-center h-96 w-screen">
            <div className="spinner"></div>
            <h1>Cargando</h1>
        </div>
    )
}

export default Loader
