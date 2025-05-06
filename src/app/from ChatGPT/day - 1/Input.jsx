import React from 'react'

function Input({ task, setTask }) {
    return (
        <div>
            <input
                value={task}
                onChange={setTask}
                type="text"
                placeholder='Enter todo ...........' />
        </div>
    )
}

export default Input
