import React, { useEffect, useState } from 'react'
import axios from 'axios'

function GetById() {
    const [id,setId] = useState(1)
    const [post,setPost] = useState({})
    const [idFromButtonClick,setIdFromButtonClick] = useState(1)
    
    const handleCick = () =>{
        setIdFromButtonClick(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res =>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[idFromButtonClick])

  return (
    <div>
      <input type="text" value={id} onChange={e=>setId(e.target.value)} />
      <button type="button" onClick={handleCick} >Go</button>
      <div>{post.title}</div>
    </div>
  )
}

export default GetById
