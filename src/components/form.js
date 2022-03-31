import React from "react";


const Form = ({setInputText, setToDos, todos, inputText}) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitToDoHandler = (e) => {
        e.preventDefault();
        setToDos([
            ...todos, {text: inputText, completed: false, id: Math.random() }
        ]);
        setInputText("");
    };
    return(
      <form>
        <input value={inputText} placeholder="Add a task" onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitToDoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        
      </form>
    );
};

export default Form;
