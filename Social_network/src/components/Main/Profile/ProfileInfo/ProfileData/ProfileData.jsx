import React from 'react'
import ProfileStatus from '../ProfileStatus/ProfileStatus';
import Contact from '../Contact/Contact';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProfileData = ({ openEditMode }) => {

	const { userId } = useParams(),
		profile = useSelector(state => state.profilePage.profile),
		contacts = Object.keys(profile.contacts).map(key => <Contact name={key} value={profile.contacts[key]} key={key} />)
	return (
		<div>
			{!profile.fullName ? null : <div className='profile__name'>{profile.fullName}</div>}
			<ProfileStatus />
			<div><b>Looking for a job:</b> {profile.lookingForAJob ? 'Yes' : 'No'}</div>
			{profile.lookingForAJob && <div>{profile.lookingForAJobDescription}</div>}
			<div><b>About me:</b> {profile.aboutMe || 'Empty'}</div>
			<div>
				<b>Contacts:</b>
				{contacts}
			</div>
			{!userId && <button onClick={openEditMode} className='edit__profile'>Edit</button>}

		</div>
	)
}

export default ProfileData;