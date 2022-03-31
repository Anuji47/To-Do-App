import React, {useState} from 'react';
import './App.css';
import Form from './components/form';
import TodoList from './components/ToDoList';
import ToDo from './components/ToDo';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setToDos] = useState([]);
  return (
    <div className="App">
      <header>
       <h1>To-Do App</h1>
      </header>
      <Form inputText={inputText} todos={todos} setToDos={setToDos} setInputText={setInputText} />
      <TodoList setToDos={setToDos} todos={todos}/>
    </div>
  );
}

export default App;
