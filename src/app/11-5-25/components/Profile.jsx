import React from 'react'
import { useContext } from 'react'
import { userContext } from '../context/userContext'

function Profile() {

    const user = useContext(userContext);

    return (
        <div>
            <h2>User : {user.name}</h2>
            <h2>Age : {user.age}</h2>
            <h2>Profession : {user.profession}</h2>
            <h2>Salery : {user.salery}</h2>
        </div>
    )
}

export default Profile
