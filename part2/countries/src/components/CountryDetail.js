import React from 'react'
import Weather from './Weather'

const CountryDetail = ({country}) => {
    console.log(country)
    console.log(country.languages)
    const flagStyle = {
        width: '200px',
        border: '5px solid gray'
    }

  return (
    <>
        <h2>{country.name.common}</h2>
        <p>capital {country.capital}</p>
        <p>area {country.area}</p>
        <h2>languages</h2>
        <ul>
            {Object.keys(country.languages).map(key => <li key={country.languages[key]}>{country.languages[key]}</li>)}
        </ul>
        <img src={country.flags.png} alt={country.flags.alt} style={flagStyle}/>

        <Weather capital={country.capital[0]}/>
    </>
  )
}

export default CountryDetail