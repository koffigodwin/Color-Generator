import React from 'react'
import  { toast} from  'react-toastify'


const SingleColor = ({ index, colors }) => {
    const {hex,weight, }= colors

    const ChooseColor =  async() =>{
      try {
        if (navigator.clipboard) {
            await navigator.clipboard.writeText(`#${hex}`)
            toast.success("you have successful copied the color")
        }else{
            toast.error("something is wrong")
        }
      } catch (error) {
        toast.error(`${error} happens` )
      }
    }
  return (
    <article className= {index > 10 ? 'singlecolor statement' : 'singlecolor'} 
    style={{background : `#${hex}`}} onClick={ChooseColor}>
      
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
      
    </article>
  )
}

export default SingleColor