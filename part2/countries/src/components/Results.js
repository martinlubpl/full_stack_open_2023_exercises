import CountryDetail from "./CountryDetail"
import CountryList from "./CountryList"

const Results = ({countries, search}) => {
    if (search === '') return null

    const filteredCountries = countries.filter(
        country => country.name.common.toLowerCase().includes(search.toLowerCase()))
    if (filteredCountries.length > 10) return 'Too many matches.'
    else if (filteredCountries.length === 0) return 'No matches.'
    else if (filteredCountries.length === 1) return <CountryDetail country={filteredCountries[0]} />
    else return <CountryList filteredCountries={filteredCountries} />
}

export default Results