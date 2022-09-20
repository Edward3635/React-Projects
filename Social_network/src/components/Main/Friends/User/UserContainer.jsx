import React from 'react';
import User from './User'
import { useDispatch, useSelector } from 'react-redux';
import { follow, unfollow } from '../../../../redux/usersReducer';

const UserContainer = props => {

	const dispatch = useDispatch(),
		followingInProgress = useSelector(state => state.friendsPage.followingInProgress),
		// currentPage = useSelector(state => state.friendsPage.currentPage),
		// pageSize = useSelector(state => state.friendsPage.pageSize),

		toggleFollow = () => (props.user.followed ?
			dispatch(unfollow(props.user.id)) :
			dispatch(follow(props.user.id)));

	return <User user={props.user} toggleFollow={toggleFollow} followingInProgress={followingInProgress} />
};

export default UserContainer;
