import { useState, useEffect } from 'react'
import React from 'react'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo'
import { EditTodoForm } from './EditTodoForm'

const getItems = () => {
    let Tasks = localStorage.getItem('Tasks')
    console.log(Tasks)

    if(Tasks) {
        return JSON.parse(localStorage.getItem('Tasks'))
    } else {
        return []
    }
}

export const TodoWrapper = () => {
    const [todos, setTodos] = useState(getItems())

    const addTodo = todo => 
    {
        const newTodo = {
            id: Math.random(),
            task: todo,
            completed: false,
            isEditing: false
        };

        setTodos(prevTodos => [...todos, newTodo]);
        console.log("New todo added: ", newTodo);
        console.log("Updated todo: ", todos);
    }

    const toggleComplete = id => {
        setTodos(prevTodos => prevTodos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
        console.log("Toggled todo: ", id);
        console.log("Updated todo: ", todos);
    };
    console.log("Current todo: ", todos);

    const deleteTodo = id => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    }

    const updateTodo = id => {
        setTodos(prevTodos => prevTodos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const updateTask = (task,id) => {
        setTodos(prevTodos => prevTodos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
    }

    useEffect(() =>{
        localStorage.setItem('Tasks',JSON.stringify(todos))
    },[todos])

  return (
    <div className='TodoWrapper'>
        <h1>Get Things Done!</h1>
        <TodoForm addTodo={addTodo}/>
        {todos.map((todo, index) => (
            todo.isEditing ? (
                <EditTodoForm updateTodo={updateTask} task={todo}/>
            ) : (
            <Todo task={todo} key={index} 
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}/>)
        ))}
    </div>
  )
}
