import React from "react";

const ToDo = ({text, todo, todos,setToDos}) => {
    const deleteHandler = () => {
       setToDos(todos.filter((el) => el.id !== todo.id));
    };
        return(
        <div className="todo">
            <li className="todo-item">{text}</li>
            
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    );
}

export default ToDo;