import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateUserStatus } from '../../../../../redux/profileReducer';
import ProfileStatus from './ProfileStatus';

const ProfileStatusContainer = () => {
	const [editMode, setCount] = useState(true),
		status = useSelector(state => state.profilePage.status),
		dispatch = useDispatch();

	let [changeStatus, setStatus] = useState(status);

	const toggleEditMode = (e) => {
		if (e.detail === 2) return setCount(false);
		setCount(true);
		dispatch(updateUserStatus(changeStatus));
	};

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value)
	};

	useEffect(() => {
		setStatus(status);
	}, [status]);

	return <ProfileStatus ToggleEditMode={toggleEditMode} onStatusChange={onStatusChange} editMode={editMode}
		changeStatus={changeStatus} />
};

export default ProfileStatusContainer;