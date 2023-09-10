import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function ToDo({todos, completeTodo, removeToDo}) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })


  return todos.map((todo, index) => (
    <div className={
      todo.isComplete ? 'todo-row complete' : 'todo-row'} 
      key={index}>
      
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      
      <div className="icons">
        <RiCloseCircleLine 
        onClick={() => removeToDo(todo.id)}
        className='delete'
        />
        <TiEdit 
          onClick={() => setEdit({id: todo.id, value: todo.text})}
          className='edit'
        />
      </div>
    </div>
  ))
    
}

export default ToDo
