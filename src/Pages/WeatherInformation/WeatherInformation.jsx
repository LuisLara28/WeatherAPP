import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

//Styles
import "./WeatherInformation.css"

//Components
import Loader from '../../Components/Loader/Loader'
import WeatherInformationCard from './WeatherInformationCard'


const WeatherInformation = () => {

    const { city } = useParams()
    console.log(city);

    //State
    const [cityInfo, setCityInfo] = useState([])
    const [loader, setLoader] = useState(false)

    //Effect
    useEffect(() => {
        setCityInfo([]);
        setLoader(true);
        const keyAPI = "6c5110bc1e9d1ec99801e1b76d2153c5"
        const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyAPI}&units=metric`
        const handleCityWeatherInfo = async () => {
            const response = await fetch(API);
            const result = await response.json();
            setCityInfo(result);
            console.log( result);
            console.log(result.weather[0].description);
        }
        handleCityWeatherInfo();
        setLoader(false);
    }, [city])


    return (
        <div id="weather-information-container" className=" flex flex-col justify-center items-center w-screen ">
            {cityInfo && !loader ? (
                <WeatherInformationCard
                    city={cityInfo?.name}
                    temp={cityInfo?.main?.temp}
                    maxtemp={cityInfo?.main?.temp_max}
                    mintemp={cityInfo?.main?.temp_min}
                    humidity={cityInfo?.main?.humidity}
                    feel={cityInfo?.main?.feels_like}
                    weather_des={cityInfo?.weather?.["0"]?.description}
                    weather={cityInfo?.weather?.["0"]?.main} />
            ) : <Loader />
            }
        </div>
    )
}

export default WeatherInformation
