import React, { useContext } from 'react'
import Countercontext from '../Context/Countercontext'
import CounterItem from './CounterItem'


export default function Counter() {
    const { counters } = useContext(Countercontext)
    return (
        <div className='counter-list'>
            {counters.map(counter => (
                <CounterItem key={counter.id} counter={counter} />
            ))}
        </div>
    )
}
