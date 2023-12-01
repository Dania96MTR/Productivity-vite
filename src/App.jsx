import { useState } from 'react'
import './App.css'
import Heading from './components/Heading'
import Counter from './components/Counter'
import Countercontext from './Context/Countercontext'

const initialValue =[ 
  {
      id: "123",
      title: " Pages studied this month",
      count: 0,
  },
  {
      id: "456",
      title: "Projects created this month",
      count: 0,
  },
  {
      id: "789",
      title: "TV shows skipped this month",
      count: 0,
  }
]
function App() {
  const [counters , setcounter] = useState(initialValue)

  return (
    <>
    <Countercontext.Provider value={{counters , setcounter}}>
     <Heading />
     <Counter />
     </Countercontext.Provider>
    </>
  )
}

export default App
