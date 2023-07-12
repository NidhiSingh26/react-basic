import React from 'react'
import Person from './Person'

function ListRendering() {
  const persons = [
    {
        id:1,
        name:'Neha',
        age:25,
        skill:'MVC'
    },
    {
        id:2,
        name:'Nidhi',
        age:22,
        skill:'ASP.NET'
    },
    {
        id:3,
        name:'Aditya',
        age:20,
        skill:'Maths'
    }    
  ]
  const personList = persons.map(person => 
    <Person key={person.id}   person={person} />
    )
  return (
    <div>
        {personList}
    </div>
  )
}

export default ListRendering
