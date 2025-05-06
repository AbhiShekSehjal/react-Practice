import React from 'react'
import Eg1 from './Eg1';
import { useState } from 'react';
// import Eg2 from './Eg2'

function UseState() {

    const [count, setCount] = useState(0);

    const IncreaseCount = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <Eg1 count={count} onclick={IncreaseCount} />

            <Eg1 count={count} onclick={IncreaseCount} />

            {/* <Eg2 /> */}

        </div>
    )
}

export default UseState
