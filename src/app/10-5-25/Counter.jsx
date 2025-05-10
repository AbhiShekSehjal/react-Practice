import React, { useReducer } from 'react'
import reducer from './reducer'

function Counter() {

    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
        <div>
            <h2>{state.count}</h2>
            <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    )
}

export default Counter
