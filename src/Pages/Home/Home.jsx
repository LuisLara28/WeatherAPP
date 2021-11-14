import React, { useState } from 'react'

//Components

import Form from '../../Components/Form/Form'
import Header from '../../Components/Header/Header'
import Loader from '../../Components/Loader/Loader'
import WeatherCard from '../../Components/WeatherCard/WeatherCard'

//Styles
import "./Home.css"

const Home = () => {

    //States
    const [cityName, setCityName] = useState("")
    const [cityInformation, setCityInformation] = useState(null)
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(null)
    
    //Functions
    const handleCityName = ({ value }) => {
        console.log(value);
        setCityName(value)
    }

    const handleSearchCity = async e => {
        try {
            e.preventDefault();
            setCityInformation(null)
            setLoader(true)
            const keyAPI ="6c5110bc1e9d1ec99801e1b76d2153c5"
            const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${keyAPI}&units=metric`
            const response = await fetch(API);
            const result = await response.json();         
            setLoader(false);
            if(result.cod === 200){
                setCityInformation(result)
                console.log(result.weather["0"].main)
                setError(null)
            }else{
                setCityInformation(null)
                setError(result.message)
            }
            
        } catch (error) {
            console.log(error);
        }

    }


    return (
        <div className="home-container flex flex-col justify-center items-center">
            <Header />
            <Form handleCityName={handleCityName} handleSearchCity={handleSearchCity} />
            {cityInformation ? (
                <WeatherCard 
                    key={cityInformation.id}
                    city={cityInformation.name}
                    temp={cityInformation.main.temp}
                    weather={cityInformation.weather["0"].main}
                />) : error ? (
                    <h4 className="text-darkPurple text-4xl font-extrabold mt-16 tracking-wide capitalize ">{error}!</h4>
                ) : null
            }
            {loader && <Loader />}

        </div>
    )
}

export default Home
