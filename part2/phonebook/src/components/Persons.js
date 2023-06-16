import React from 'react'

const Persons = ({ persons }) => {
  // console.log(props)
  //map(person => <p key={person.name}>{person.name} {person.phone}</p>)}
  return (
    persons.map(person => <p key={person.id}>{person.name} {person.number}</p>)
  )
}

export default Persons