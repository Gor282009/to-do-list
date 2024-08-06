import './App.css';
import { useState } from 'react';
import Todolist from './components/Todolist';
import Todoform from './components/Todoform';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Javascript', completed: false },
    { id: 2, text: 'Javascript', completed: false },
    { id: 3, text: 'Javascript', completed: false },
    { id: 4, text: 'Javascript', completed: false },
  ]);
  return (
    <div className="home">
      <div className="App">
        <h1 className='title'>
          Todo List App
          <span role="img" aria-label="todo"></span>
        </h1>
        <Todolist todos={todos} />
        <Todoform onAdd={(text) => {
          setTodos([
           ...todos,
            {
              id: Math.random(),
              text: text,
              completed: false,
            }
          ])
        }}/>
      </div>
    </div>
  );
}

export default App;
// onClick={() => {
//   const newTodo = { id: Math.floor(Math.random() * 1000) + 1, text: "", completed: false };
//   setTodos([...todos, newTodo]);
// }}
