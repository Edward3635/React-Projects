import React from 'react'
import { useSelector } from 'react-redux';
import useTypedSelector from './Hooks/useTypedSelector';

const UserList: React.FC = () => {
const {users, error, isLoading} = useTypedSelector(state => state.user);
	return (
		<div>UserList</div>
	)
}

export default UserList