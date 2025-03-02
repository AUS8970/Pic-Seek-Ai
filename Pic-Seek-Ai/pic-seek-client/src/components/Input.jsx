import React, { useState } from 'react';
import './Input.css';

export default function Input({ onSubmit }) {
  const [input, setInput] = useState("")

  const handleSubmit = () => {
    if(!input) return;
    onSubmit(input)
    setInput("")
  }

  return (
    <div className='container'>
      <input 
        type="text"
        className='input'
        onChange={e => 
          setInput(e.target.value)
        }
        value={input}
      />
      <button
        className='button' 
        onClick={handleSubmit}
      > 
        Add 
      </button>
    </div>
  )
}
