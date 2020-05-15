import React from 'react'
import Person from './Person'

function PersonList () {
  const persons = [
    {
      id: 1,
      name: 'Nava',
      age: 27,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Kent',
      age: 30,
      skill: 'Angular'
    },
    {
      id: 3,
      name: 'Bruce',
      age: 29,
      skill: 'Vue'
    }
  ]
  const personList = persons.map(person => <Person key = {person.id} person={person} />)
  return (
    <div>
      {/*<h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
    <h2>{names[2]}</h2>*/}
      {personList}
    </div>
  )
}

export default PersonList
