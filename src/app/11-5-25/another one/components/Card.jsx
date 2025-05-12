import React from 'react'
import UserProfile from './UserProfile'

function Card() {
    return (
        <div style={{ border: "2px solid", padding: "20px" }}>
            <h2>Card</h2>
            <UserProfile />
        </div>
    )
}

export default Card
