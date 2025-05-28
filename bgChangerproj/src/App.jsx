import { useState } from "react"
import Btn from "./Component/Btn"

function App() {
  const [color,setColor]=useState("aqua")
  return (
  
      <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-yellow-200 px-2 py-3 rounded-2xl">
            <button className="outline-none px-4 bg-red-600 rounded-xl text-white shadow" onClick={()=>setColor("red")}>Red</button>
            <button className="outline-none px-4 bg-blue-600 rounded-xl text-white shadow" onClick={()=>setColor("blue")}>Blue</button>
            <button className="outline-none px-4 bg-green-600 rounded-xl text-white shadow" onClick={()=>setColor("green")}>Green</button>
            <button className="outline-none px-4 bg-pink-300 rounded-xl text-white shadow" onClick={()=>setColor("pink")}>Pink</button>
          </div>
        </div>

      </div>
    
  )
}

export default App
