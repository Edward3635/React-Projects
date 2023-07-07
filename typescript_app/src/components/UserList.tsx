import React, { useEffect } from 'react'
import {useTypedSelector} from './Hooks/useTypedSelector';
import { useActions } from './Hooks/useAction';

const UserList: React.FC = () => {
	const { users, error, isLoading } = useTypedSelector(state => state.user);
	const {fetchUsers} = useActions()
	useEffect(() => {
		fetchUsers();
	}, []);
	if (isLoading) return <h2>Завантаження...</h2>
	if (error) return <h2>{error}</h2>
	return (
		<div>
			{users.map((user:any) =>  <div key={user.id}>{user.name}</div> )}
		</div>
	)
}

export default UserList