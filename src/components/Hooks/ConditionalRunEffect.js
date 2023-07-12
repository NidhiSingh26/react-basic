import React, { useState,useEffect } from 'react'


function ConditionalRunEffect() {
    const [names,setNames] = useState('')
    const [count,setCount] = useState(0)
  

  useEffect(()=>{
    console.log('useEffect - updating document title')
    document.title = `You clicked ${count} times`
   
  })

  return (
    <div>
      <input type="text" value={names} onChange={e => setNames(e.target.value)} />  
      <button onClick={()=>setCount(count + 1)}>Clicked {count} times</button>
    </div>
  )
}

export default ConditionalRunEffect
