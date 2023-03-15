import React from 'react'; 


const ToDo = ({todo, handleToggle}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        <div  id={todo.id} onClick={handleClick} className={todo.complete ? "strthrough" : ""}>
            {todo.task}
        </div>
    );
};

export default ToDo; 