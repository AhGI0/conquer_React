import React, { useState } from 'react'
import Greating from './Greating'

export default function App() {
  let [msg,setMsg]=useState({
    text:"" , 
    key:false,  
  });  
  return (
    <>
    <Greating msg={msg.text} keyA ={msg.key}/> 
    </>
  )
}
