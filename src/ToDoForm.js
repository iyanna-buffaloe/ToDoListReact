import React, { useState } from 'react';

const ToDoForm = ({addTask, listname}) => {

    const [userInput, setUserInput] = useState(''); 

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value); 
    }

    const handleSubmit = (e) =>  {
        e.preventDefault();
        addTask(userInput, listname); 
        setUserInput("");
    }

    return (
        <form onSubmit={handleSubmit}> 
            <input value={userInput} type = "text" onChange={handleChange} placeholder="Enter a task..."/>
            <button>Add Task</button>
        </form>
    );

};

export default ToDoForm; 