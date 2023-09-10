import React, {useState} from 'react'

function ToDoForm(props) {

  const [input, setInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
  }

  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Add a task" 
          value={input} 
          name="text" 
          className="todo-input"
          />

        <button className="submitTask">Add task</button>
      </form>

    </div>
  )
}

export default ToDoForm
