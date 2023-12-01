import React, { useContext } from 'react'
import Countercontext from '../Context/Countercontext'

export default function CounterItem({counter}) {
    const {setcounter} = useContext(Countercontext)
    const increase = ()=> {
        setcounter(prev => prev.map(item => {
            if(item.id === counter.id){
                return {
                    id: item.id ,
                    title: item.title ,
                    count: item.count +1
                }
            }
            return item
        }))
    }

    const decrease = ()=> {
        setcounter(prev => prev.map(item => {
            if(item.id === counter.id && item.count > 0){
                return {
                    id: item.id ,
                    title: item.title ,
                    count: item.count -1
                }
            }
            return item
        }))
    }
  return (
    <>
    <div className='container'>
        <h3>Title: {counter.title}</h3>
        <p>Count: {counter.count}</p>
        <div className='btns'>
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
        </div>

    </div>
    </>
  )
}
