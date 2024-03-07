import React from 'react'
import cl from '../style/App.module.scss'
import TodoWrapper from './Todo/TodoWrapper'

function App(): JSX.Element {
  return (
    <div className={cl.app}>
      <TodoWrapper />
    </div>
  )
}

export default App
