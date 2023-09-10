import React, {useState} from 'react'
import ToDoForm from './ToDoForm'
import ToDo from './ToDo'

function ToDoList() {
  const [todos, setToDos] = useState([])

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return 
    }

    const newTodos = [todo, ...todos]

    setToDos(newTodos);
  }

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    })
    setToDos(updatedTodos);
  }

  return (
    <div>To Do List
      <ToDoForm onSubmit={addTodo} />
      <ToDo 
        todos={todos}
        completeTodo={completeTodo}
      />
    </div>
    
  )
}

export default ToDoList
