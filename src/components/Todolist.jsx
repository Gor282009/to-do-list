import React from 'react'

function Todolist({ todos }) {
    return(
        todos.map((todo, index) => (
            <div className="div">
                <input type="checkbox" id={todo.id}  />
                <label for={todo.id}>{todo.text}</label>
                <button className='myBtn'>X</button>
            </div>
        )))
    
}

export default Todolist


