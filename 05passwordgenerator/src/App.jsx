import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed]=useState(false)
  const [charAllowed, setcharAllowed]=useState(false)
  const [password, setPassword]=useState("")

//useRef hook
const passwordRef= useRef(null)



  const passwordGenerator= useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*/?";

    for(let i=0; i<length; i++){
         const char= Math.floor(Math.random()*str.length)
         pass=pass+ str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])
  
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },
  [password]) 

  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])


  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-600 bg-gray-400'>
  <h1 className='text-white text-center my-3'>Password Generator</h1>

  <div className='flex shadow rounded-lg overflow-hidden mb-4'>
    <input
      type="text"
      value={password}
      readOnly
      ref={passwordRef}
      className='outline-none w-full py-1 px-3 text-orange-600 bg-yellow-100'
      placeholder='password'
    />
    <button 
    onClick={copyPasswordToClipboard}
    className='bg-blue-500 text-white px-3 py-1 hover:bg-blue-600'>
      Copy
    </button>
  </div>

  <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input
        type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=> {setLength(e.target.value)}} //react automatcally grabs the change event and we can access its target value
      />
      <label>length: {length}</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input type="checkbox" 
      defaultChecked={numberAllowed}
      id="numberInput"
      onChange={()=> setnumberAllowed((prev)=>!prev)}
       />
       <label htmlFor="numberInput">Numbers</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input type="checkbox" 
      defaultChecked={charAllowed}
      id="charInput"
      onChange={()=> setcharAllowed((prev)=>!prev)}
       />
       <label htmlFor="numberInput">Characters</label>
    </div>
  </div>
</div>

    </>
  )
}

export default App
