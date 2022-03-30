import React from 'react'
import Input from './components/Input'
import TodoItem from './components/TodoItem'
import './App.css'
import { selectTodos } from './features/todoSlice'
import { useSelector } from 'react-redux'

function App() {
  const todos = useSelector(selectTodos)

  return (
    <div className='App'>
      <div className='app__container'>
        <div className='app__todoContainer'>
          {todos.map((todo) => (
            <TodoItem name={todo.item} done={todo.done} id={todo.id}></TodoItem>
          ))}
        </div>
        <Input />
      </div>
    </div>
  )
}

export default App
