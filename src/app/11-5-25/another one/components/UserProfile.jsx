import React, { useContext } from 'react'
import { userContext } from '../context/Context'
import OuterBox from './OuterBox'

function UserProfile() {

    const user = useContext(userContext)

    return (
        <>
            <div style={{ border: "2px solid" }}>
                <h2>Inner box</h2>
                <h1>{user.name}</h1>
                <h1>{user.age}</h1>
                <h1>{user.job}</h1>
                <h1>{user.salary}</h1>
            </div>
            <OuterBox />
        </>

    )
}

export default UserProfile
