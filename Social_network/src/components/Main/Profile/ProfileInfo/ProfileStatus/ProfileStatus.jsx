import React from 'react'

const ProfileStatus = props => {

	return (
		<div>
			{props.editMode ? <span onDoubleClick={props.toggleEditMode} >
				{props.changeStatus || 'Empty status'}
			</span> :
				<div>
					<input type='text' value={props.changeStatus || 'Empty status'} autoFocus
						onBlur={props.toggleEditMode} onChange={props.onStatusChange} />
				</div>}
		</div>
	);
};

export default ProfileStatus;