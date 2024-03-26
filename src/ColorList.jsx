import React from 'react'
import SingleColor from './SingleColor'
import { nanoid } from 'nanoid'

const ColorList = ({ color }) => {
  return (
    <section className='colorlist'>
      {
        color.map((color,index) =>{
          return <SingleColor key={nanoid()} colors={color} index={index}/>
        })
      }
    </section>
  )
}

export default ColorList