import React from 'react'

//Styles
import "./NotFound.css"
import image from "./Pikachu-png-1-635x6241-removebg.png"

const NotFound = () => {
    return (
        <div className="not-found-container flex flex-col justify-start items-center bg-white h-screen m-0 p-0">
            <h1 id="not-found-title" className="text-4xl mt-9 font-bold">Error 404: Page Not Found</h1>
            <h2 id="text-h2" className="text-2xl my-28">But Hey!! here's a Pikachu!!!</h2>
            <img src={image} alt="p" className="w-60" />
            
        </div>
    )
}

export default NotFound
