import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleAddPerson = (event) => {
    event.preventDefault() 
    // console.log(event.target)
    const newPersons = persons.concat({name: newName})
    setPersons(newPersons)
    setNewName('')
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
          <button type="submit" onClick={handleAddPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name}</p>)}
    </div>
  )
}

export default App