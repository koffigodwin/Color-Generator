import React, { useState } from 'react'

const Form = ({ AddColor }) => {
    const [color,setcolor] = useState('')
    const ChangeColor = (e) =>{
     e.preventDefault();
     AddColor(color)
    }
    const handlechange = (e) =>{
      setcolor(e.target.value)
    }

  return (
    <div className='form-component'>
        <h4>pick color</h4>
        <form className='form-color' onSubmit={ChangeColor}>
            <input type="color" value="#ff0" onChange={handlechange} />
            <input type="text" value={color} onChange={handlechange} placeholder='#ff0200' />
            <button className='btn' type='submit' style={{background: color}}>Submit</button>
        </form>
    </div>
  )
}

export default Form