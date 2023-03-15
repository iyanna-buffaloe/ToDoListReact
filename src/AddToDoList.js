import React, { useState } from 'react';

const AddToDoList = ({addList}) => {
    const [userInputTitle, setUserInputTitle] = useState(''); 

    const handleChange = (e) => {
        setUserInputTitle(e.currentTarget.value); 
    }

    const handleSubmit = (e) =>  {
        e.preventDefault();
        addList(userInputTitle);
        setUserInputTitle("");
    }

    return (
        <form onSubmit={handleSubmit}> 
            <input value={userInputTitle} type = "text" onChange={handleChange} placeholder="Enter a new list name..."/>
            <button>Add List</button>
        </form>
    );
};

export default AddToDoList; 

