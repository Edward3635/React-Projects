import React from 'react'
import Preloader from '../../../Common/Preloader/Preloader';
import userPhotoDefault from '../../../../img/userPhoto.png';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { saveAvatar } from '../../../../redux/profileReducer';
import Contact from './Contact/Contact';

const ProfileInfo = () => {
	const { userId } = useParams(),
		dispatch = useDispatch(),

		isFetching = useSelector(state => state.profilePage.isFetching),
		profile = useSelector(state => state.profilePage.profile),

		onMainPhotoSelected = e => {
			if (e.target.files.length) dispatch(saveAvatar(e.target.files[0]));
		};

	if (!profile || isFetching) return <Preloader />
	const contacts = Object.keys(profile.contacts).map(key => <Contact name={key} value={profile.contacts[key]} key={key} />)
	console.log(contacts);

	return (
		<div className='profile__info'>
			{/* {isFetching ? <Preloader /> : null} */}
			<div className='profile__avatar'><img className='img__profile'
				src={profile.photos.large ? profile.photos.large : userPhotoDefault} alt='small avatar' />
				{userId ? null :
					<div className='upload__avatar'>
						<div>
							<label className='label__file-avatar' htmlFor='file__avatar'>Upload</label>
							<input type='file' className='input__file-avatar' id='file__avatar' onChange={onMainPhotoSelected} />
						</div>
					</div>}
			</div>
			<div>
				{!profile.fullName ? null : <div className='profile__name'>{profile.fullName}</div>}
				{!profile.aboutMe ? null : <div className='profile__about-me'> {profile.aboutMe}</div>}
				<ProfileStatus />
				<div><b>Looking for a job:</b> {profile.lookingForAJob ? 'Yes' : 'No'}</div>
				{profile.lookingForAJob && <div>{profile.lookingForAJobDescription}</div>}
				<div><b>About me:</b> {profile.aboutMe || 'Empty'}</div>
				<div>
					<b>Contacts:</b>
					{contacts}
				</div>

			</div>
		</div>
	);
};

export default ProfileInfo;