export enum TodoActionTypes {
	FETCH_TODOS = 'FETCH_TODOS',
	FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
	FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
	SET_TODO_PAGE = 'SET_TODO_PAGE'
};

export interface TodoState {
	todos: any[];
	isLoading: boolean;
	error: null | string;
	page: number;
	limit: number;
};

interface FetchTodoAction {
	type: TodoActionTypes.FETCH_TODOS;
};

interface FetchTodoSuccessAction {
	type: TodoActionTypes.FETCH_TODOS_SUCCESS;
	payload: any[];
};

interface FetchTodoErrorAction {
	type: TodoActionTypes.FETCH_TODOS_ERROR;
	payload: string;
};
interface SetTodoPageAction {
	type: TodoActionTypes.SET_TODO_PAGE;
	payload: number;
};

export type TodoAction = FetchTodoAction | FetchTodoSuccessAction | FetchTodoErrorAction | SetTodoPageAction
