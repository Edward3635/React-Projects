import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../../../img/userPhoto.png';
import { follow, unfollow } from '../../../../redux/usersReducer';

const User = ({ user }) => {

	const dispatch = useDispatch(),
		followingInProgress = useSelector(state => state.friendsPage.followingInProgress),

		toggleFollow = () => (user.followed ? dispatch(unfollow(user.id)) :
			dispatch(follow(user.id)));

	return (
		<li className='friends__page-user'>
			<div className='user__body'>
				<div className='user__follow-img'>
					<div className='user__img'>
						<NavLink to={'/profile/' + user.id}>
							<img src={user.photos.small != null ? user.photos.small : userPhoto}
								alt={`img${user.name}`} />
						</NavLink>
					</div>
					<button disabled={followingInProgress.includes(user.id)} className='user__follow'
						onClick={toggleFollow}> {user.followed ? 'Unfollow' : 'Follow'}
					</button>
				</div>
				<div className='user__info'>
					<div className='user__name-status'>
						<div className='user__name'>{user.name}</div>
						<div className='user__status'>{user.status}</div>
					</div>
					<div className='user__location'>
						<div className='user__country'>{'props.user.location.country'},</div>
						<div className='user__city'>{'props.user.location.city'}</div>
					</div>
				</div>
			</div>
		</li>
	);
};


export default User;
