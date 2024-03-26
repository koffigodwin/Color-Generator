import Form from "./Form"
import  Values  from 'values.js'
import ColorList from "./ColorList"
import { useState } from "react"
import { ToastContainer , toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



function App() { 
  const newcolor = new Values("#ff0").all(10);
  const [color ,setcolor] = useState(newcolor);
  console.log(color);

  const AddColor = (color)=>{
   try {
    const newcolor = new Values(color).all(10);
    setcolor(newcolor)
   } catch (error) {
    toast.error(error.message )
   }
  }
  return (
    <main>
       <h1>Color generator project</h1>
       <Form  AddColor = {AddColor}/>
       <ColorList color ={color} />

       <ToastContainer position='top-center'/>
    </main>
  )
}

export default App
