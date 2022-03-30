import React, { useState } from 'react'
import './Input.css'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { saveTodo } from '../features/todoSlice'

const RandomText = styled.div`
  color: blue;
`

const Input = () => {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()

  const addNewTodo = () => {
    console.log('Adding', input)

    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    )

    setInput('')
  }

  return (
    <div className='input'>
      <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => addNewTodo()}>Add!</button>
    </div>
  )
}

export default Input
