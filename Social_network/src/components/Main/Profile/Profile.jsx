import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { getUserProfile, getUserStatus } from '../../../redux/profileReducer';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = () => {
	const dispatch = useDispatch(),
		isAuthorized = useSelector(state => state.authorization.isAuthorized),
		authorizedUser = useSelector(state => state.authorization.id);
	let { userId } = useParams();
	if (!userId) userId = authorizedUser;

	useEffect(() => { if (userId) dispatch(getUserProfile(userId)) }, [dispatch, userId]);
	useEffect(() => { if (userId) dispatch(getUserStatus(userId)) }, [dispatch, userId]);

	return !isAuthorized && !userId ? <Navigate to='/signIn' /> :
		<section className='section__profile'>
			<div className='profile__banner'>
				<img src={require('../../../img/banner.jpg')} alt="banner" />
			</div>
			<div className='profile__content'>
				<ProfileInfo />
				<MyPosts />
			</div>
		</section>

};
export default Profile;