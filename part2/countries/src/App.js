
import React, { useEffect, useState } from'react';
import axios from 'axios';
import Results from './components/Results';

function App() {
  //state
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState(null)
  
  //init load countries https://studies.cs.helsinki.fi/restcountries/api/all
  useEffect(() => {
    console.log('load init countries')
    axios
    .get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then(resp => {
      // console.log(resp.data)
      setCountries(resp.data)
    })
  },[])


  //search
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }
  // show 1 country
  const handleShowCountry = (country) => {
    console.log(country)
    setSearch(country)
  }
  
  
  
  
  //return
  return (
   <>
    <div>Search for coutries:  
    <form>
      <input 
      value={search}
      onChange={handleSearch} />
    </form>
    </div>
      <Results countries={countries} search={search} handleShowCountry={handleShowCountry}/>
   </>
  );
}

export default App;
