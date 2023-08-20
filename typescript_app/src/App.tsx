import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UsersPage from './components/User/UsersPage';
import TodosPage from './components/Todo/TodosPage';
import Main from './components/Main';
import { Link } from 'react-router-dom';
import UserItemPage from './components/User/UserItemPage';
import TodoItemPage from './components/Todo/TodoItemPage';

function App() {

	return (
		<BrowserRouter>
			<div className='links'>
				<Link to={'/users'}>User</Link>
				<Link to={'/todos'}>Todo</Link>
				<Link to={'/'}>Main</Link>
			</div>
			<Routes>
				<Route path={'/'} element={<Main />} />
				<Route path={'/users'} element={<UsersPage />} />
				<Route path={'/todos'} element={<TodosPage />} />
				<Route path={'/users/:id'} element={<UserItemPage />} />
				<Route path={'/todos/:id'} element={<TodoItemPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
