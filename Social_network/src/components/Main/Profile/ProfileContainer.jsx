import React, { useEffect } from 'react';
import Profile from './Profile';
import * as axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';



const ProfileContainer = () => {
	const profile = useSelector(state => state.profilePage.profile)
	const dispatch = useDispatch();

	useEffect(() => {

		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
			.then(response => {
				dispatch(setUserProfile(response.data));
			});

	})

	return <Profile profile={profile} />

};
// const mapStateToProps = state => ({
// 	profile: state.profilePage.profile
// });

//export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
export default ProfileContainer