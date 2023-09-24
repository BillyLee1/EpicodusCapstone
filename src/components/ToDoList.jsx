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

  const updateToDo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setToDos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
  }

  const removeToDo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)

    setToDos(removeArr);
  }

  const completeToDo = id => {
    let updatedToDos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    })
    setToDos(updatedToDos);
  }

  return (
    <div>
      <ToDoForm onSubmit={addTodo} />
      <ToDo 
        todos={todos}
        completeToDo={completeToDo}
        removeToDo={removeToDo}
        updateToDo = {updateToDo}
      />
    </div>
    
  )
}

export default ToDoList
