import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-555555'},
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ]) 
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

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          filter shown with <input
          onChange={(event) => setSearchFilter(event.target.value) }
          value={searchFilter} />
        </div>
        <h2>add new person</h2>
        <div>
          name: <input 
          onChange={(event) => setNewName(event.target.value)} 
          value={newName} />
        </div>
        <div>
          number: <input 
          onChange={(event) => setNewPhone(event.target.value)}
          value={newPhone}
          />
        </div>
        <div>
          <button type="submit" onClick={handleAddPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.filter(person => person.name.toLowerCase().includes(searchFilter.toLowerCase())).map(person => <p key={person.name}>{person.name} {person.phone}</p>)}
    </div>
  )
}

export default App