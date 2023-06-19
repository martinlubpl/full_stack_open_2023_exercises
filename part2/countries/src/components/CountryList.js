import React from 'react'

const CountryList = ({filteredCountries}) => {
  console.log(filteredCountries)
    return (
        filteredCountries.map(country => <p key={country.name.common}>{country.name.common}</p>)
  )
}

export default CountryList