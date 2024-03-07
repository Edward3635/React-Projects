import React, { useState } from 'react'
import cl from '../../style/App.module.scss'
import { closeEditMode, updateEditMode } from '../../redux/appSlice'
import { useAppDisptach } from '../../hooks/redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

export const EditModeForm = ({ id, text }: { id: string, text: string }): JSX.Element => {
  const [value, setValue] = useState(text)
  const dispatch = useAppDisptach()
  const trimmedValue = value.trim()
  const disabled = trimmedValue.length >= 4 ? false : true

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    dispatch(updateEditMode({ value, id }))
  }
  return (
    <form onSubmit={handleSubmit} className={cl.todoForm}>
      <input
        type='text'
        value={value}
        onChange={(e): void => {
          setValue(e.target.value)
        }}
        className={`${cl.todoInput} ${cl.editInput}`}
        placeholder='Update task'
      />
      <div className={cl.btnsWrapper}>
        <button
          type='submit'
          className={`${cl.todoBtn} ${cl.updateBtn} ${disabled || value === text ? cl.disabled : ''}`}
          disabled={disabled || value === text}
        >
					Update
        </button>
        <div
          className={cl.closeIconWrapper}
          onClick={(): void => {
            dispatch(closeEditMode(id))
          }}
        >
          <FontAwesomeIcon icon={faClose} className={cl.close} />
        </div>
      </div>
    </form>
  )
}
