import React from 'react'

function Square({ value, handleChange }) {

    return (


        <button className='square' onClick={handleChange}>{value}</button>


    )
}

export default Square