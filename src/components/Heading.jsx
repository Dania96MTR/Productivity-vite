import React, { useContext } from 'react'
import Countercontext from '../Context/Countercontext'

export default function Heading() {
    const { counters }= useContext(Countercontext)
    const getTotalofCount= ()=>{
        return counters.reduce((total , counter) => total + counter.count , 0)
    }
  return (
    <h1>Productivity Points:{getTotalofCount()}</h1>
  )
}
