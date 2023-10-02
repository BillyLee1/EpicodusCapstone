import { useState } from "react";

export function TodoForm({ addTodo }) {

  const [newItem, setNewItem] = useState("")


  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return

    addTodo(newItem)

    setNewItem("")
    
  }


  return (
    <form onSubmit={handleSubmit} className="newTodoForm">
      <label>Create a new todo </label>
      <input 
        value={newItem} 
        onChange={e => setNewItem(e.target.value)}
        type="text" 
        id="item"/>
      <button>Add Todo</button>
    </form>
  )
}
