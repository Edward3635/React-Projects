import React, { FC, useState, useEffect } from 'react'
import { IUser } from '../../types/types';
import axios from 'axios';
import List from '../List';
import UserItem from './UserItem';
import { useNavigate } from 'react-router-dom';

const UsersPage: FC = () => {

	const [users, setUsers] = useState<IUser[]>([]);
	const navigate = useNavigate();
	useEffect(() => {
		fetchUsers();
	}, []);
	async function fetchUsers() {
		try {
			const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
			setUsers(response.data)
		} catch (error) {
			console.log(error);
		}
	};


	return (
		<List items={users} renderItem={(user) => <UserItem user={user} onClick={(user) => navigate('/users/' + user.id)} key={user.id} />} />
	)
}

export default UsersPage