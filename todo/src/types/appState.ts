export interface IAppState {
  todoList: TodoItem[]
  currentEditRecord: string | null
}

export interface TodoItem {
  id: string
  text: string
  completed: boolean
  isEditing: boolean
}
