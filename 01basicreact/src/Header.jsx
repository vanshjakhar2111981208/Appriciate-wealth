import React from 'react'
export default function Header(props) {
  console.log(props);//props is a obj that comes from parent if we pass simple values then it make them a obj but if we pass an entire obj then we have to do it like this.
  let {nm}=props;//(destructure)ab nm me hi obj aagaya toh props.nm.a itna likhne ki need nahi h
  return (
    <div>
        
      <h1>helllo guysss {nm.a}</h1>
      <div>YOOO SABAL {props.aa}</div>

    </div>
  )
}


