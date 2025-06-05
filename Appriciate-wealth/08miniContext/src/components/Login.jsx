import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username,setUsername]=useState('');
    const [password, setPassword]=useState('');
    const [data, setdata]=useState('');

    const {setUser}=useContext(UserContext);

    const handleSubmit=(e)=>{
      e.preventDefault();
      setUser({username,password,data});
      //setd({data})

    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text' placeholder='username' 
        value={username} 
        onChange={(e)=>setUsername(e.target.value)}/>
        {" "}
        <input type='text' placeholder='password'
        value={password} 
        onChange={(e)=>setPassword(e.target.value)}/>
        <input type='text' placeholder='data'
        value={data} 
        onChange={(e)=>setdata(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login