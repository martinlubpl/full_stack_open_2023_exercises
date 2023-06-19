import React from 'react'

const CountryList = ({filteredCountries, handleShowCountry}) => {
  console.log(filteredCountries)
    return (
        filteredCountries.map(country => <p key={country.name.common}>{country.name.common} 
        <button onClick={() => handleShowCountry(country.name.common)}>show</button></p>)
  )
}

export default CountryList