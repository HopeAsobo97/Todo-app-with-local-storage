/* eslint-disable no-template-curly-in-string */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, toggleComplete, deleteTodo, updateTodo}) => {
  return (
    <div className='Todo'>
      <p  className={{...task.completed ? "completed" : ""}} style={{ textDecoration: task.completed ? 'line-through' : 'none'}}>{task.task}</p><div>
        <FontAwesomeIcon icon={faPenToSquare} className='icon' onClick={() => updateTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} className='icon' onClick={() => deleteTodo(task.id)}/>
        <input type='checkbox' onClick={() => toggleComplete(task.id)} />
      </div>
    </div>
  )
}
