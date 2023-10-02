import './App.css';
import { useState } from "react"
import { TodoForm } from "./TodoForm"
import { TodoList } from "./TodoList"
import CountdownTimer from './Pomodoro/CountDownTimer';

export default function App() {
  const [todos, setTodos] = useState([])
  
  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos, 
        { 
          id: crypto.randomUUID(), 
          title,
          completed: false
        }
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed}
        }
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <h1>Todos for today </h1>
      <TodoForm addTodo={addTodo}/>
      <h1>Todo List!</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      <CountdownTimer />
    </>
  );
}
