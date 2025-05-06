'use client';


import React from 'react'
import { useState } from 'react';
import LoginPage from './LoginPage';
import SignInPage from './SignInPage';


function CheckUser() {

    let [isloggedIn, setIsloggedIn] = useState(false);
    let [count, setCount] = useState(0);

    const changePage = () => {
        setIsloggedIn(!isloggedIn);
    }

    const like = () => {
        setCount(count++)
    }

    const unlike = () => {
        setCount(count--)
    }

    return (
        <div>
            {isloggedIn ? <LoginPage /> : <SignInPage />}
            <button onClick={changePage}>Click</button>
            <br />
            <br />
            <button onClick={like}>Like</button>
            <br />
            <br />

            <button onClick={unlike}>unLike</button>
            <h1>likes : {count}</h1>
        </div>
    )
}

export default CheckUser

