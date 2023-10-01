import { useState } from "react";

export function TodoForm() {

  const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="newTodoForm">
      <label className="todo">Create a new todo </label>
      <input 
        value={newItem} 
        onChange={e => setNewItem(e.target.value)}
        type="text" 
        id="item"/>
      <button>Add Todo</button>
    </form>
  )
}
