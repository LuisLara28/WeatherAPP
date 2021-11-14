import React from 'react'

import { Link } from 'react-router-dom';

//Images
import dayIcon from "./day.svg"
import rainIcon from "./rainy-7.svg"
import cloudIcon from "./cloudy-day-3.svg"

import "./WeatherInformationCard.css"

const WeatherInformationCard = ({city, temp, maxtemp, mintemp, humidity, feel, weather_des, weather}) => {
    const roundTemp = temp => Math.floor(temp)
    console.log(weather);
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <Link to="/" className="absolute left-5 top-5 font-bold text-lg bg-darkBlue text-white p-3 rounded-lg">Regresar</Link>
            <div className=" flex flex-col relative justify-evenly items-center text-white  text-6xl mt-20 w-screen">
                <h1 >{roundTemp(temp)}°C</h1>
                <img src={weather === "Clear" ? dayIcon : weather === "Clouds" ? cloudIcon: rainIcon} alt={weather} className="w-24 "/>
            </div>
            <h6 className="text-white text-4xl mt-1">{city}</h6>
            <h4 className="text-white text-1xl mt-1 capitalize">{weather}</h4>
            <img src="" alt="" />
            <div id="weather-information-card" className="justify-self-center  h-96 w-4/5 mb-16 mt-16 bg-opacity-30 w-60 bg-darkBlue rounded-lg relative">
                <div className="flex flex-col pt-2 pl-3 space-x-12 text-sm font-semibold">
                    <h2 className="mt-2 text-lg text-white">Weather Details</h2>
                    <div className="flex flex-col mt-4 ml-0 text-white text-base">
                        <h3 className="mt-10">Weather Description <span className="absolute right-10 capitalize">{weather_des}</span></h3>
                        <h3 className="mt-10">Feels like <span className="absolute right-10">{roundTemp(feel)}°C</span></h3>
                        <h3 className="mt-10">Max Temperature <span className="absolute right-10 ">{roundTemp(maxtemp)}°C</span></h3>
                        <h3 className="mt-10">Min Temperature <span className="absolute right-10 ">{roundTemp(mintemp)}°C</span></h3>
                        <h3 className="mt-10">Humidity <span className="absolute right-10">{roundTemp(humidity)}%</span></h3>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default WeatherInformationCard
