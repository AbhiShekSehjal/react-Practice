import React, { useState } from 'react'
import Input from './Input'
import AddBtn from './AddBtn'
import ShowTasks from './ShowTasks';

function TodoApp() {

    const [task, setTask] = useState("hello");

    const handleSetTaskChange = (e) => {
        setTask(e.target.value)
    }

    return (
        <div>
            <Input task={task} setTask={handleSetTaskChange} />
            <br />
            <AddBtn />
            <br />
            <br />
            <ShowTasks tasks={task} />
        </div>
    )
}

export default TodoApp
