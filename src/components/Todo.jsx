import { useState } from "react";
import { TodoForm } from "./TodoForm";
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

export function Todo({ completed,  id, title, toggleTodo, deleteTodo}) {
  return (
    <div className="listItem">
      <li>
        <label>
          <div className="labelWrapper">
          <input
              type="checkbox"
              checked={completed}
              onChange={e => toggleTodo(id, e.target.checked)}
            />
            {title + " "}
            <Button className="deleteButton" onClick={() => deleteTodo(id)} variant="outline-danger">Delete</Button>{' '}
            </div>
          </label>
        </li>
    </div>
  )
}
