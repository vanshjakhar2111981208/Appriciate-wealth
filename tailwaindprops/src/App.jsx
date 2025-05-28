import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bacard from "./hh.jsx"
import Card from './components/Card.jsx'

function App() {
  let obj={
    a:69,
    b:"JAAT"
  }
  let arr=[1,2,3,4];
  
  return (
    <>
      <h1 className='bg-green-300 text-black p-4  rounded-2xl m-4 '>Tailwind test</h1>
      <Card user="CHAI" Objs={obj} AR={arr} btn="Click me"/>
      <Card user="VANSH J" />
      <Bacard aa="VHM" x={obj}/>
      
    </>
  )
}

export default App
