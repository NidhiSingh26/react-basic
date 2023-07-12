import React, { useState } from 'react'

function UseStateCountertwo() {
  const initialCount = 0
  const [count,setCount] = useState(initialCount)  //arrary destructuring
  return (
    <div>
      Count:{count}
       <button onClick={()=>setCount(initialCount)}>Reset</button>
       <button onClick={()=>setCount(count + 1)}>Increment</button>
       <button onClick={()=>setCount(prevState=>prevState - 1)}>Decrement</button>
    </div>
  )
}

export default UseStateCountertwo
