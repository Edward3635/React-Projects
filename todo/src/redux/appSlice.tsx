import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAppState, TodoItem } from '../types/appState'
import { v4 as uuidv4 } from 'uuid'

const initialState: IAppState = {
  todoList: [],
  currentEditRecord: null
}

export const appSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addRecord(state, action: PayloadAction<string>) {
      const newRecord: TodoItem = {
        id: uuidv4(),
        text: action.payload,
        completed: false,
        isEditing: false
      }
      state.todoList.push(newRecord)
    },
    removeRecord(state, action: PayloadAction<string>) {
      state.todoList = state.todoList.filter(todo => todo.id !== action.payload)
    },
    toggleComplete(state, action: PayloadAction<string>) {
      const todo = state.todoList.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    openEditMode(state, action: PayloadAction<string>) {
      const todo = state.todoList.find(todo => todo.id === action.payload)
      if (todo) {
        if (state.currentEditRecord !== action.payload) {
          const prevRecord = state.todoList.find(todo => todo.id === state.currentEditRecord)
          if (prevRecord) prevRecord.isEditing = false
          state.currentEditRecord = action.payload
        }
        todo.isEditing = !todo.isEditing
      }
    },
    updateEditMode(state, action: PayloadAction<{value:string, id:string}>) {
      const todo = state.todoList.find(todo => todo.id === action.payload.id)
      if(todo) {
        todo.text = action.payload.value
        todo.isEditing = false
      }
      state.currentEditRecord = null
      
    },
    closeEditMode(state, action: PayloadAction<string>) {
      const todo = state.todoList.find(todo => todo.id === action.payload)
      if(todo) todo.isEditing = false
      state.currentEditRecord = null
    }
  }
})
export default appSlice.reducer
export const { addRecord, removeRecord, toggleComplete, openEditMode,updateEditMode, closeEditMode } = appSlice.actions
