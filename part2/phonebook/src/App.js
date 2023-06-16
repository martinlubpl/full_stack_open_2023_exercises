import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import { PersonForm } from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'


const App = () => {
  // const [persons, setPersons] = useState([
  //   { name: 'Arto Hellas', phone: '040-555555'},
  //   { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
  //   { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
  //   { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  // ]) 

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [searchFilter, setSearchFilter] = useState('')

  const handleAddPerson = (event) => {
    event.preventDefault() 
    // console.log(event.target)
    //check if exists
    const personExists = persons.some(person => person.name === newName)
    const phoneExists = persons.some(person => person.phone === newPhone)
    if(personExists || phoneExists) {
      alert(`${newName} or ${newPhone} is already added to the phonebook`)
    } else {
      const newPersons = persons.concat({name: newName, phone: newPhone})
      setPersons(newPersons)
      setNewName('')
      setNewPhone('') 
    }
    //
    
  }
  useEffect(() => {
    console.log('useeffect')
    axios.get('http://localhost:3001/persons')
    .then(response => setPersons(response.data))
  }, []) 

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter} />
      <PersonForm 
      setNewName={setNewName}
      newName={newName}
      setNewPhone={setNewPhone}
      newPhone={newPhone}
      handleAddPerson={handleAddPerson}/>
      <h2>Numbers</h2>
      {/* {persons.filter(person => person.name.toLowerCase().includes(searchFilter.toLowerCase())).map(person => <p key={person.name}>{person.name} {person.phone}</p>)} */}
      {/* only filtered */}
      <Persons persons={persons.filter(person => person.name.toLowerCase()
      .includes(searchFilter.toLowerCase()))}/>
    </div>
  )
}

export default App