import React from "react";
import ToDo from "./ToDo";

const TodoList = ({todos, setToDos}) => {
   
    return (
        <div className="todo-container">
          <ul className="todo-list">
             {todos.map((todo) => (
                <ToDo setToDos={setToDos} todos={todos} text={todo.text} key={todo.id} todo={todo} />
             ))}
          </ul>
        </div>
    )
}

export default TodoList;