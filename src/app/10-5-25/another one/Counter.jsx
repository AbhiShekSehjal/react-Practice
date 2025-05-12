import React from 'react'
import Reducer from './Reducer'
import { useReducer } from 'react'

function Counter() {

    const initialValue = 100;

    const [state, dispatch] = useReducer(Reducer, initialValue);

    const handleIncrement = () => {
        dispatch({ type: "increment" });
    }

    const handleDecrement = () => {
        dispatch({ type: "decrement" });
    }

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </div>
    )
}

export default Counter
