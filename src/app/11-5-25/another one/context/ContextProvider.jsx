import React, { useState } from 'react'
import { userContext } from './Context'

function ContextProvider({ children }) {

    const [user, setUser] = useState({
        name: "Abhishek sehjal",
        age: 21,
        job: "Full stack developer",
        salary: 60000
    });

    return (
        <userContext.Provider value={user}>
            {children}
        </userContext.Provider>
    )
}

export default ContextProvider

