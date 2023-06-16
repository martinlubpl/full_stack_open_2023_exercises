import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import { PersonForm } from './components/PersonForm'
import Persons from './components/Persons'
import personService from './components/services/persons'


const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [searchFilter, setSearchFilter] = useState('')
  const dbUrl = 'http://localhost:3001/persons'

  /////////////////////////////////////////////////
  const handleAddPerson = (event) => {
    event.preventDefault()
    // console.log(event.target)
    //check if exists
    const personExists = persons.some(person => person.name === newName)
    //const phoneExists = persons.some(person => person.number === newPhone)

    if (personExists) {
      // alert(`${newName} or ${newPhone} is already added to the phonebook`)
      if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one`)) {
        console.log('update')
        const person = persons.find(person => person.name === newName)
        // console.log(ind)
        // console.log(persons[ind].id)
        const changedPerson = { ...person, number: newPhone }
        const id = changedPerson.id
        personService
          .update(id, changedPerson)
          .then(resp => {
            setPersons(persons.map(p => p.id !== id ? p : resp))
            setNewName('')
            setNewPhone('')
          })
      }
    } else {
      //db
      const newPerson = { name: newName, number: newPhone }
      personService
        .create(newPerson)
        .then(response => {
          //state
          const newPersons = persons.concat(response)
          setPersons(newPersons)
          setNewName('')
          setNewPhone('')
        })
    }
    //

  } // END ADD PERSON

  // initial laod
  useEffect(() => {
    //components/services/persons.js imported as personService
    personService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
  }, [])

  //DELETE
  const handleDelete = (name, id) => {
    console.log(name, id)
    if (window.confirm(`Delete ${name} ?`)) {
      personService.delPerson(id).then(response => {
        //state
        const newPersons = persons.filter((person) => person.id != id)
        setPersons(newPersons)
      })
    }


  }

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
        handleAddPerson={handleAddPerson} />
      <h2>Numbers</h2>
      {/* {persons.filter(person => person.name.toLowerCase().includes(searchFilter.toLowerCase())).map(person => <p key={person.name}>{person.name} {person.phone}</p>)} */}
      {/* only filtered */}
      <Persons
        persons={persons.filter(person => person.name.toLowerCase()
          .includes(searchFilter.toLowerCase()))} handleDelete={handleDelete} />
    </div>
  )
}

export default App