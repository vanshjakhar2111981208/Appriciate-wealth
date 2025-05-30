import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
  const data =useLoaderData();
  // const [data,setData]=useState({});
  // useEffect(()=>{
    //     fetch('https://api.github.com/users/vanshjakhar2111981208')
    //     .then(res=>res.json())
    //     .then(data=>{
      //         console.log(data);
      //         setData(data);
      //     })
      // },[])
  return (
    <div className='text-center bg-gray-600 p-4 text-3xl'>Github Followers : {data.followers}
    <img src={data.avatar_url}/>
    <a href={data.url} className="hover:underline">
        GIT URL
    </a>
    </div>
  )
}

export default Github

export const githubLoader=async()=>{
    const res=await fetch('https://api.github.com/users/vanshjakhar2111981208')
    return res.json();
}