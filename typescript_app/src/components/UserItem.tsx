import React, { FC } from 'react'
import { IUser } from '../types/types'

interface UserItemProps {
	user: IUser;
};

const UserItem: FC<UserItemProps> = ({ user }) => {
	return (
		<div>{user.id}. {user.name} lives in {user.address.city}, {user.address.street} street</div>
	)
}

export default UserItem