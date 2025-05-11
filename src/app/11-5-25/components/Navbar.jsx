import React from 'react'
import Profile from './Profile'
import { useContext } from 'react';
import { userContext } from '../context/userContext';

function Navbar() {

    return (
        <div>
            <div className="nav">Navbar</div>
            <Profile />
        </div>
    )
}

export default Navbar
