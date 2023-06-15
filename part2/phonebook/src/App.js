import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-555555'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

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
      {persons.map(person => <p key={person.name}>{person.name} {person.phone}</p>)}
    </div>
  )
}

export default App