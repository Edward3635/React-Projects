import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UsersPage from './components/UsersPage';
import TodosPage from './components/TodosPage';
import Lists from './components/Lists';
import { Link } from 'react-router-dom';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';

function App() {

	return (
		<BrowserRouter>
			<div>
				<Link to={'/users'}>User</Link>
				<Link to={'/todos'}>Todo</Link>
				<Link to={'/'}>Main</Link>
			</div>
			<Routes>
				<Route path={'/'} element={<Lists />} />
				<Route path={'/users'} element={<UsersPage />} />
				<Route path={'/todos'} element={<TodosPage />} />
				<Route path={'/users/:id'} element={<UserItemPage />} />
				<Route path={'/todos/:id'} element={<TodoItemPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
