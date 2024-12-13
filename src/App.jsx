import React from 'react'
import Greating from './Greating'

export default function App() {
  let names= ['ahmed','nada','momen','katty','reda','maged','sara'];   
  return (
    <>
    {names.map((e,index)=>(
      <Greating name={e[0].toUpperCase() + e.slice(1)} />
    ))}
    </>
  )
}
