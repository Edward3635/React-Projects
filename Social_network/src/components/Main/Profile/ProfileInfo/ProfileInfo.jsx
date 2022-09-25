import React from 'react'
import Preloader from '../../../Common/Preloader/Preloader';
import userPhotoDefault from '../../../../img/userPhoto.png';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = props => {
	const prof = props.profile;
	if (!prof) return <Preloader />
	return (
		<div className='profile__info'>
			{props.isFetching ? <Preloader /> : null}
			<div className='profile__avatar'><img className='img__profile'
				src={prof.photos.large ? prof.photos.large : userPhotoDefault} alt='small avatar' />
			</div>
			<div>
				{!prof.fullName ? null : <div className='profile__name'>{prof.fullName}</div>}
				{!prof.aboutMe ? null : <div className='profile__about-me'> {prof.aboutMe}</div>}
				<ProfileStatus />
			</div>
		</div>
	);
};

export default ProfileInfo;