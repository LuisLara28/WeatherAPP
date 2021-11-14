import React from 'react'
import { Link } from 'react-router-dom'
//import { useParams } from 'react-router.dom'

//Styles
import "./WeatherCard.css"

//Images

import dayIcon from "./day.svg"
import rainIcon from "./rainy-7.svg"
import cloudIcon from "./cloudy-day-3.svg"

const roundTemp = temp => Math.floor(temp)
const d = new Date().toUTCString()

//const params = useParams();

const WeatherCard = ({id, city, temp, weather}) => {
    return (
        <Link to={`/WeatherInformation/${city}`} >
            <div className="flex justify-center items-center h-96">
                    <div id="weather-card" className="   h-56  w-56 bg-darkBlue rounded-lg relative md:w-72 md:h-72 md:mt-16">
                        <div className="flex pt-2 pl-3 space-x-12 text-sm font-semibold">
                            <h6 className="text-white text-sm md:text-xl">{d}</h6>
                        
                        </div>
                        <h1 className="text-white text-4xl font-semibold absolute bottom-8 left-2 md:text-6xl md:bottom-12">{roundTemp(temp)}°C</h1>
                        <h3 className="text-white font-semibold absolute bottom-3 left-2 text-base md:text-2xl md:bottom-5">{city}</h3>
                        <img src={weather === "Clear" ? dayIcon : weather === "Clouds" ? cloudIcon: rainIcon} alt="" className="w-24 absolute bottom-0 right-0 md:w-40" />
                    </div>
            </div>
        </Link>
    )
}

export default WeatherCard
