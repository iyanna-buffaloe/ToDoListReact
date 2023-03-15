import React from 'react'; 
import ToDo from "./ToDo"; 

const ToDoList = ({toDoList, handleToggle, handleFilter, listname}) => { 


    return (
        <div>
            {
                toDoList.map(todo => {
                return (
                    <ToDo 
                    todo={todo} 
                    handleToggle={handleToggle} 
                    handleFilter = {handleFilter}
                    listname = {listname}
                    />
                )
            })}
        </div>
    );
};

export default ToDoList; 