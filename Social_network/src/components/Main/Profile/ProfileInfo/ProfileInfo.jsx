import React from 'react'
import Preloader from '../../../Common/Preloader/Preloader';
import userPhotoDefault from '../../../../img/userPhoto.png';

const ProfileInfo = props => {
	const prof = props.profile;
	if (!prof) return <Preloader />
	return (
		<div className='profile__info'>
			{props.isFetching ? <Preloader /> : null}
			<div className='profile__avatar'><img className='img__profile'
				src={!prof.photos.small ? userPhotoDefault : prof.photos.large}
				alt='small avatar' /> </div>
			<div>
				{!prof.fullName ? null : <div className='profile__name'>{prof.fullName}</div>}
				{!prof.aboutMe ? null : <div className='profile__about-me'> {prof.aboutMe}</div>}
			</div>
		</div>
	);
};

export default ProfileInfo;