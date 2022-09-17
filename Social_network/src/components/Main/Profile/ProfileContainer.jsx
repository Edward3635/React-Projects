import React, { useEffect } from 'react';
import Profile from './Profile';
import * as axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';
import { useParams } from 'react-router-dom';
import { toggleIsFetching } from '../../redux/profileReducer';



const ProfileContainer = () => {
	const isFetching = useSelector(state => state.friendsPage.isFetching);
	const profile = useSelector(state => state.profilePage.profile)
	const dispatch = useDispatch();
	let { userId } = useParams();
	if (!userId) userId = 2;

	useEffect(() => {

		dispatch(toggleIsFetching(true));
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
			.then(response => {
				dispatch(setUserProfile(response.data));
				dispatch(toggleIsFetching(false));
			});

	}, [dispatch, userId])

	return <Profile profile={profile} isFetching={isFetching} />

};
// const mapStateToProps = state => ({
// 	profile: state.profilePage.profile
// });

//export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
export default ProfileContainer