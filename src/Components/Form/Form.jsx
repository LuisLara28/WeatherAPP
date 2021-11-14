import React from 'react'

//Styles
import "./Form.css"


const Form = ({ handleCityName, handleSearchCity }) => {
    ;
    return (
        <form className="form-container flex justify-center mt-20" onSubmit={e => handleSearchCity(e)}>
            <input type="text" placeholder="Find your Location..." onChange={({target}) => handleCityName(target)} className="  h-16 w-48 pl-4 justify-self-center text-xs rounded-l-full text-white bg-darkBlue md:w-96 md:text-base" />
            <input type="submit" value="Search" className="rounded-r-full w-28 h-16 text-xs bg-lightBlue text-white hover:bg-lila border-4 border-darkBlue font-semibold md:w-40 md:text-base" />   
                    
        </form>

    )
}

export default Form
