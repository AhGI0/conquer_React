import React from 'react'
import Greating from './Greating'

export default function App() {
  let names= ['ahmed','nada','momen','katty','reda','maged','sara'];   
  return (
    <>

   <Greating age={23} > 
  <h3>hello, world!</h3>  {/* this is called a children*/}
   </Greating>
    </>
  )
}
