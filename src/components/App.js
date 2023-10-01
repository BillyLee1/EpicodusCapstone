import './App.css';
import { TodoForm } from "./TodoForm"
import { TodoList } from "./TodoList"

function App() {
  return (
    <>
      <h1>Todos for today </h1>
      <TodoForm />
      <h1>Todo List!</h1>
      <TodoList />
    </>
  );
}

export default App;
