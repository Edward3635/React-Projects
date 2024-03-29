import axios from 'axios';
import React, { FC, useEffect, useState } from 'react'
import { IUser } from '../../types/types';
import { useNavigate, useParams } from 'react-router-dom';

type UserItemPageParams = {
	id: string;
};

const UserItemPage: FC = () => {

	const [user, setUser] = useState<IUser | null>(null);
	const params = useParams<UserItemPageParams>();
	const navigate = useNavigate();

	useEffect(() => { fetchUser() }, []);

	async function fetchUser() {
		try {
			const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id);
			setUser(response.data)
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<button onClick={() => navigate('/users')}>Back</button>
			<h1>User page {user?.name}</h1>
			<div>
				{user?.email}
			</div>
			<div>
				{user?.address.city} {user?.address.street} {user?.address.zipcode}
			</div>
		</div>
	)
}

export default UserItemPage