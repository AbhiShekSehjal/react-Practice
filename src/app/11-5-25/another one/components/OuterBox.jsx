import React, { useContext } from 'react'
import { userContext } from '../context/Context'

function OuterBox() {

    const user = useContext(userContext)

    return (
        <div style={{ border: "2px solid", margin: "50px", padding: "10px" }}>
            <h2>Outer box</h2>
            <h1>{user.name}</h1>
            <h1>{user.age}</h1>
            <h1>{user.job}</h1>
            <h1>{user.salary}</h1>
        </div>
    )
}

export default OuterBox
