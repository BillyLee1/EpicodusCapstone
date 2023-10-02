import React from "react";
import { Todo } from "./Todo"

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map(todo => {
        return (
          <Todo 
            {...todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            key={todo.id}
          />
        )
      })}
    </ul>
  )
}
