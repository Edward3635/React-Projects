import React from 'react'
import Preloader from '../../../Common/Preloader/Preloader';
import userPhotoDefault from '../../../../img/userPhoto.png';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import { useSelector } from 'react-redux';

const ProfileInfo = () => {

	const isFetching = useSelector(state => state.profilePage.isFetching),
		profile = useSelector(state => state.profilePage.profile);

	if (!profile || isFetching) return <Preloader />

	return (
		<div className='profile__info'>
			{/* {isFetching ? <Preloader /> : null} */}
			<div className='profile__avatar'><img className='img__profile'
				src={profile.photos.large ? profile.photos.large : userPhotoDefault} alt='small avatar' />
			</div>
			<div>
				{!profile.fullName ? null : <div className='profile__name'>{profile.fullName}</div>}
				{!profile.aboutMe ? null : <div className='profile__about-me'> {profile.aboutMe}</div>}
				<ProfileStatus />
			</div>
		</div>
	);
};

export default ProfileInfo;