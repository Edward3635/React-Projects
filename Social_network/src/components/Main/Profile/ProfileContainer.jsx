import React, { useEffect } from 'react';
import Profile from './Profile';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile, getUserStatus } from '../../../redux/profileReducer';
import { useParams } from 'react-router-dom';

const ProfileContainer = () => {
	const isFetching = useSelector(state => state.profilePage.isFetching),
		//isAuthorized = useSelector(state => state.authorization.isAuthorized),
		profile = useSelector(state => state.profilePage.profile),
		dispatch = useDispatch();
	//navigate = useNavigate();
	let { userId } = useParams();
	if (!userId) userId = 2;
	// useEffect(() => { if (!isAuthorized) return navigate('/login') },
	// 	[isAuthorized, navigate])

	useEffect(() => (dispatch(getUserProfile(userId))), [dispatch, userId]);
	useEffect(() => (dispatch(getUserStatus(userId))), [dispatch, userId])


	return <Profile profile={profile} isFetching={isFetching} />
};

export default ProfileContainer;