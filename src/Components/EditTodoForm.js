import React, {useState} from 'react'

export const EditTodoForm = ({updateTodo, task}) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault();
        updateTodo(value, task.id);
        setValue("");
        console.log(value)
    }
  return (
    <form className='EditTodoForm'onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value} placeholder='Edit Task' onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='edit-todo-btn'>Edit</button>
    </form>
  )
}