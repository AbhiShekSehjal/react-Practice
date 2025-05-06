import React from 'react'

function ShowTasks({ tasks }) {


    return (
        <ul>
            {/* {tasks.forEach(task => { */}
            {tasks.map(task => {
            <li>{tasks}</li>
            })}
            {/* })} */}
        </ul>
    )
}

export default ShowTasks
