import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter=0
  let [counter,setcounter]=useState(0)
  const addValue = ()=>{ 
    if(counter<20)
    {counter=counter+1
    setcounter(counter)}
    console.log("value added", counter)
  }

  const removeValue=()=>{
    if(counter>0)
   { counter=counter-1;
    setcounter(counter)}
    console.log("value added", counter)
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>
      <button
      onClick={addValue}
      >add value</button>
      <br />
      <button
      onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
