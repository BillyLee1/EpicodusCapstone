import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import { useEffect, useState } from "react"
import { TodoForm } from "./TodoForm"
import { TodoList } from "./TodoList"
import Timer from './Pomodoro/Timer';
import SettingsPage from './Pomodoro/SettingsPage';
import SettingsContext from './Pomodoro/SettingsContext';
import TodoNav from "./TodoNav";


export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(15);
  const [breakMinutes, setBreakMinutes] = useState(5);
  
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

        return todo
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

        <h1>Billy's Productivity Planner</h1>
        <TodoForm addTodo={addTodo}/>
        <div className='timerWrapper'>
          <div className="pomodoroTitle">Pomodoro Timer</div>
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
        </div>
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        <TodoNav />
      </main>
    </>
  );
}
