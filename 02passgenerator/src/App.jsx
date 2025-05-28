import { useState ,useCallback, useEffect, useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAlw,setnumberAlw]=useState(false);
  const [charAlw,setcharAlw]=useState(false);
  const [pass,setpass]=useState();

  //ref hook
  const passRef=useRef(null)

  const passGenerator= useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAlw) str+="0123456789"
    if(charAlw) str+="{}!@#$%^&*[]-_"
    for(let i=1;i<=length;i++){
      let char =Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char);
    }
    setpass(pass);
  },[length,numberAlw,charAlw]);

  useEffect(()=>{
    passGenerator();
  },[length,numberAlw,charAlw,passGenerator])

  let copypassword=useCallback(()=>{
    passRef.current?.select(); 
    window.navigator.clipboard.writeText(pass);

  },[pass])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
    <h1 className='text-white text-centre my-3'>Password Generator</h1>
      <div className='flex-shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type='text'
        value={pass}
        className='outline-none w-full py-1 px-3'
        placeholder='password!'
        ref={passRef}
        />
        <button 
        onClick={copypassword}
        className='outline-none bg-blue-600 text-white px-5 py-1 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={80}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numberAlw}
          id="numberInput"
          className='cursor-pointer'
          onChange={(e)=>{setnumberAlw((prev)=>!prev)}}
          />
          <label>Include nums</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charAlw}
          id="charInput"
          className='cursor-pointer'
          onChange={(e)=>{setcharAlw((prev)=>!prev)}}
          />
          <label>Include Chars</label>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
