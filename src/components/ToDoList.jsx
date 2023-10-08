import React from "react";
import { Todo } from "./Todo"
import Table from 'react-bootstrap/Table';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


export function TodoList({ todos, toggleTodo, deleteTodo}) {
  return (
    <div className="todolistWrapper">
      <h1>Your Todos For Today</h1>
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map(todo => {
          return (
            <Table striped bordered hover >
            <thead>
              <tr>
                <th><Todo 
                    {...todo}
                    key={todo.id}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                  />
                  </th>
              </tr>
            </thead>
          </Table>
          )
        })}
      </ul>
    </div>
  )
}
