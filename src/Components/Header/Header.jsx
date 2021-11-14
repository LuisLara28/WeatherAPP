import React from 'react'

//Images
import Sun from './day.svg'

//Styles
import "./Header.css"

const Header = () => {
    return (
        <div className="flex header-container bg-darkBlue h-32 w-screen">
            <img src={Sun} alt="sun" className="sun w-20 justify-self-center self-center"/>
            <h1 className="text-white text-xl self-center font-bold">The Weather APP</h1>
            
        </div>
    )
}

export default Header
