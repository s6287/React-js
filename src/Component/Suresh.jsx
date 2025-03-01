import React from 'react'
import { useContext } from 'react'
import Instance from './MessageContent'
function Suresh() {
    const consume = useContext(Instance)
  return (
      <>
          <h2> { consume }</h2>
      </>
  )
}

export default Suresh