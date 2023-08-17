import React, { useEffect } from 'react'
import { useTypedSelector } from './Hooks/useTypedSelector'
import { useActions } from './Hooks/useAction';

const TodoList: React.FC = () => {
	const { page, error, isLoading, todos, limit } = useTypedSelector(state => state.todo);
	const { fetchTodos, setTodoPage } = useActions();
	const pages = [1, 2, 3, 4, 5]
	useEffect(() => { fetchTodos(page, limit) }, [page]);

	if (isLoading) return <h2>Завантаження...</h2>
	if (error) return <h2>{error}</h2>
	return (
		<div className='todoList'>
			{todos.map(todo => <div key={todo.id}>{todo.id} - {todo.title}</div>)}
			<div style={{ display: 'flex' }}>
				{pages.map(pg =>
					<div
						key={pg}
						onClick={() => setTodoPage(pg)}
						style={{ border: pg === page ? '2px solid green' : '1px solid gray', padding: 10 }}>
						{pg}
					</div>)}
			</div>
		</div>
	)
}

export default TodoList