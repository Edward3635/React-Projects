import React from 'react'
import cl from '../../style/App.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { openEditMode, removeRecord, toggleComplete } from '../../redux/appSlice'
import { useAppDisptach } from '../../hooks/redux'
import { TodoItem } from '../../types/appState'

const Todo: React.FC<TodoItem> = ({ id, completed, text, isEditing }): JSX.Element => {
  const dispatch = useAppDisptach()
  return (
    <div className={cl.todo}>
      <div
        className={cl.todoContent}
        onClick={(): void => {
          dispatch(toggleComplete(id))
        }}
      >
        <p className={`${completed ? cl.completed : cl.incompleted}`}>{text}</p>
      </div>
      <div className={cl.iconsWrapper}>
        {!isEditing && 
          <FontAwesomeIcon
            className={cl.editIcon}
            icon={faPenToSquare}
            onClick={(): void => {
              dispatch(openEditMode(id))
            }}
          />
        }
        <FontAwesomeIcon
          className={cl.deleteIcon}
          icon={faTrash}
          onClick={(): void => {
            dispatch(removeRecord(id))
          }}
        />
      </div>
    </div>
  )
}

export default Todo
