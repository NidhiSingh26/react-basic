import React, { useCallback, useState } from 'react'
import Button from './Button'
import Count from './Count'

function CallBack() {

  const[age,setAge] = useState(25) 
  const[salary,setSalary] = useState(50000)

  const incrementAge =useCallback(()=>{
    setAge(age+1)
  },[age])
  const incrementSalary =useCallback(()=>{
    setSalary(salary+5000)
  },[salary])
  return (
    <div>
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default CallBack
