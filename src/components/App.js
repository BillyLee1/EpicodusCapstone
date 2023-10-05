import './App.css';
import { useEffect, useState } from "react"
import { TodoForm } from "./TodoForm"
import { TodoList } from "./TodoList"
import Timer from './Pomodoro/Timer';
import SettingsPage from './Pomodoro/SettingsPage';
import SettingsContext from './Pomodoro/SettingsContext';

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(45);
  
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

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
      <main>
        <h1>Todos for today </h1>
        <TodoForm addTodo={addTodo}/>
        <h1>Todo List!</h1>
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>

        <SettingsContext.Provider value={{
          showSettings,
          setShowSettings,
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}>
          {showSettings ? <SettingsPage /> : <Timer />}
        </SettingsContext.Provider>
        
      </main>
    </>
  );
}
