import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateUserStatus } from '../../../../../redux/profileReducer';

const ProfileStatus = props => {

	const dispatch = useDispatch(),
		status = useSelector(state => state.profilePage.status),
		[editMode, setCount] = useState(true),
		[changeStatus, setStatus] = useState(status),

		toggleEditMode = (e) => {
			if (e.detail === 2) return setCount(false);
			setCount(true);
			dispatch(updateUserStatus(changeStatus));
		},

		onStatusChange = (e) => { setStatus(e.currentTarget.value) };

	useEffect(() => { setStatus(status) }, [status]);

	return (
		<div>
			{editMode ? <span onDoubleClick={toggleEditMode} >
				{changeStatus || 'Empty status'}
			</span> :
				<div>
					<input type='text' value={changeStatus} autoFocus
						onBlur={toggleEditMode} onChange={onStatusChange} />
				</div>}
		</div>
	);
};

export default ProfileStatus;