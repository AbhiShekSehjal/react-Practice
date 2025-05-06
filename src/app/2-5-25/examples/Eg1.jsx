
import React from 'react'


function Eg1({ count, onclick }) {

    return (
        <div>
            <h1>Count for 1 : {count}</h1>
            <button onClick={onclick}>Click btn 1</button>
        </div>
    )
}

export default Eg1
