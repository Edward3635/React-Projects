import * as axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../../../img/userPhoto.png';

const User = props => {
	const dispatch = useDispatch()
	const toggleFollow = () => {
		if (props.user.followed) {
			axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`,
				{
					withCredentials: true, headers:
						{ 'API-KEY': '32d1f0e3-9564-4812-9fae-cd3caea18846' }
				})
				.then(response => {
					// dispatch(toggleIsFetching(false));
					// dispatch(setUsers(response.data.items));
					// dispatch(setTotalUsersCount(response.data.totalCount));
					if (response.data.resultCode === 0) {
						dispatch(props.onUnfollow(props.user.id));
					};
				});
		} else {
			axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`, {},
				{
					withCredentials: true, headers:
						{ 'API-KEY': '32d1f0e3-9564-4812-9fae-cd3caea18846' }
				})
				.then(response => {
					// dispatch(toggleIsFetching(false));
					// dispatch(setUsers(response.data.items));
					// dispatch(setTotalUsersCount(response.data.totalCount));
					if (response.data.resultCode === 0) {
						dispatch(props.onFollow(props.user.id));
					};
				});
		}


	};
	return (
		<li className='friends__page-user'>
			<div className='user__body'>
				<div className='user__follow-img'>
					<div className='user__img'>
						<NavLink to={'/profile/' + props.user.id}>
							<img src={props.user.photos.small != null ? props.user.photos.small : userPhoto}
								alt={`img${props.user.name}`} />
						</NavLink>
					</div>
				</div>
				<div className='user__info'>
					<div className='user__name-status'>
						<div className='user__name'>{props.user.name}</div>
						<div className='user__status'>{props.user.status}</div>
					</div>
					<div className='user__location'>
						<div className='user__country'>{'props.user.location.country'},</div>
						<div className='user__city'>{'props.user.location.city'}</div>
					</div>
				</div>
			</div>
			<button className='user__follow' onClick={toggleFollow}>{props.user.followed ? 'Unfollow' : 'Follow'}</button>
		</li>
	);
};


export default User;
