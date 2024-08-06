import React from 'react'
import { useState } from 'react'
import "App.css"
function Todoform({ onAdd }) {
  const [text, setText] = useState('')
  return (
    <form action="" onSubmit={(e) => {
      e.preventDefault()
      onAdd(text)
      setText('')
    }} >
      <input type="text" name="" id="" value={text} className='search-inp' onChange={(e) => {
        setText(e.target.value)
      }} />
      <button>Add</button>
    </form>
  )
}

export default Todoform