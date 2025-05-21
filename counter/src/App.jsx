import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(5)
  //let counter=5;
  const addValue=()=>{
    //counter+=1;
    if(counter<10){
      setCounter(counter+1);
      setCount(c=>c+1);//by this we can only update because of usestate c/prev anything we can take

    }
    //console.log("valu+++",counter);
  }
  const removeVal=()=>{
    if(counter>0){
      setCounter(counter-1);
    }
    console.log(counter-=1);
  }
  return (
    <>
      <h1>VANSH JAKHAR</h1>
      <h2>Counter val : {counter}</h2>
      <button onClick={addValue}>Add {counter}</button>
      <br></br>
      <button onClick={removeVal}>Remove {counter}</button>
    </>
  )
}

export default App
