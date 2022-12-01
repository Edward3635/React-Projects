import React, { useState } from 'react'
import Preloader from '../../../Common/Preloader/Preloader';
import userPhotoDefault from '../../../../img/userPhoto.png';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { saveAvatar } from '../../../../redux/profileReducer';
import ProfileData from './ProfileData/ProfileData';
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';

const ProfileInfo = () => {
	const { userId } = useParams(),
		dispatch = useDispatch(),

		isFetching = useSelector(state => state.profilePage.isFetching),
		profile = useSelector(state => state.profilePage.profile),
		[editMode, setEditMode] = useState(false),

		onMainPhotoSelected = e => {
			if (e.target.files.length) dispatch(saveAvatar(e.target.files[0]));
		},
		toggleEditMode = () => { editMode ? setEditMode(false) : setEditMode(true) };

	if (!profile || isFetching) return <Preloader />

	return (
		<div className='profile__info'>
			{/* {isFetching ? <Preloader /> : null} */}
			<div className='profile__avatar'><img className='img__profile'
				src={profile.photos.large ? profile.photos.large : userPhotoDefault} alt='small avatar' />
				{!userId &&
					<div className='upload__avatar'>
						<div>
							<label className='label__file-avatar' htmlFor='file__avatar'>Upload</label>
							<input type='file' className='input__file-avatar' id='file__avatar' onChange={onMainPhotoSelected} />
						</div>
					</div>}
			</div>
			{editMode ? <ProfileDataForm closeEditMode={toggleEditMode} /> :
				<ProfileData openEditMode={toggleEditMode} />}
		</div>
	);
};

export default ProfileInfo;