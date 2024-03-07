import React, { useState } from 'react'
import cl from '../../style/App.module.scss'
import { addRecord } from '../../redux/appSlice'
import { useAppDisptach } from '../../hooks/redux'

export const TodoForm = (): JSX.Element => {
  const dispatch = useAppDisptach()
  const [value, setValue] = useState<string>('')
  const trimmedValue = value.trim()
	
  const disabled = trimmedValue.length >= 4 ? false : true

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (value) {
      dispatch(addRecord(value))
      setValue('')
    }
  }
  return (
    <form onSubmit={handleSubmit} className={cl.todoForm}>
      <input
        type='text'
        value={value}
        onChange={(e): void => setValue(e.target.value)}
        className={cl.todoInput}
        placeholder='What is the task today?'
      />
      <button type='submit' className={`${cl.todoBtn} ${disabled ? cl.disabled : ''}`} disabled={disabled}>
				Add Task
      </button>
    </form>
  )
}
