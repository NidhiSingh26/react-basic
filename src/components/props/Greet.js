import React from 'react'

// const Greet = props =>{
//     return <h1>Hello {props.fname} {props.lname}</h1>
// }


//Destructing props-we can also write this
const Greet = ({fname,lname}) =>{
    return <h1>Hello {fname} {lname}</h1>
}

export default Greet