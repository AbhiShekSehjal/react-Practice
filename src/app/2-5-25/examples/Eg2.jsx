import React from 'react'
import { useState } from 'react';

function Eg2() {

    const [count, setCount] = useState(0);

    const IncreaseCount = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <button onClick={IncreaseCount}>likes : {count}</button>
            <button onClick={IncreaseCount}>likes : {count}</button>
            <button onClick={IncreaseCount}>likes : {count}</button>
        </div>
    )
}

export default Eg2
