import React from 'react'
import personService from './services/persons'

const Persons = ({ persons, handleDelete }) => {


  // console.log(props)
  //map(person => <p key={person.name}>{person.name} {person.phone}</p>)}
  return (
    persons.map(person =>
      <p key={person.id}>
        {person.name} {person.number}
        <button onClick={() => handleDelete(person.name, person.id)}>delete</button>
      </p>)
  )
}

export default Persons