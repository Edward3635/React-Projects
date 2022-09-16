import React from 'react'
import Preloader from '../../../Common/Preloader/Preloader';

const ProfileInfo = props => {
	if (!props.profile) return <Preloader />
	return (
		<div>
			<div>Ava + description</div>
			<div><img src={props.profile.photos.small} alt='small avatar' /> </div>
		</div>
	);
};

export default ProfileInfo;