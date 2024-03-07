import React, { useState } from 'react'
import cl from '../../style/App.module.scss'
import { useAppSelector } from '../../hooks/redux'
import { TodoForm } from './TodoForm'
import Todo from './TodoRecord'
import { EditModeForm } from './EditMode'

const TodoWrapper = (): JSX.Element => {
  const [filterType, setFilterType] = useState<string>('all')
  const todoState = useAppSelector(state => state.app.todoList)
  const completedCount = todoState.filter(todo => todo.completed).length
  const filteredTodos = todoState.filter(todo =>
    filterType === 'all' ? true : filterType === 'completed' ? todo.completed : !todo.completed
  )
  const todoList = filteredTodos.map(todo =>
    todo.isEditing ? <EditModeForm key={todo.id} id={todo.id} text={todo.text} /> : <Todo key={todo.id} {...todo} />
  )
	

  return (
    <div className={cl.todoWrapper}>
      <div className={cl.titleWrapper}>
        <h1>Todo List</h1>
        <div className={cl.filterContainer}>
          <select className={cl.filterSelect} value={filterType} onChange={(e): void => setFilterType(e.target.value)}>
            <option value='all'>All</option>
            <option value='completed'>Completed</option>
            <option value='current'>Current</option>
          </select>
        </div>
        {!!todoState.length && <span className={cl.counter}>{`${completedCount}/${todoState.length}`}</span>}
      </div>
      <TodoForm />
      {todoList}
    </div>
  )
}

export default TodoWrapper
