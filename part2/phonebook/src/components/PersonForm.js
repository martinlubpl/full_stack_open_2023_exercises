import React from 'react'

export const PersonForm = ({setNewName, newName, setNewPhone, newPhone,handleAddPerson}) => {
  return (
    <form>
        <h2>add a new person</h2>
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
  )
}
