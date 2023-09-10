import React, {useState} from 'react'
import ToDoForm from './ToDoForm'

function ToDoList() {
  const [todos, setToDos] = useState([])

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return 
    }

    const newTodos = [todo, ...todos]

    setToDos(newTodos)
  }

  return (
    <div>To Do List
      <ToDoForm onSubmit={addTodo} />
    </div>
    
  )
}

export default ToDoList
