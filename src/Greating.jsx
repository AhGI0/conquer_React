import React from 'react'

export default function Greating({children,age}) {
  return (
    <div>
      {children}
      <h2>age : {age}</h2> {/*it's a huge impact for sure */}
    </div>
  )
}
