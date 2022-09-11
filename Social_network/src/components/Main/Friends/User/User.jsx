import React from 'react';


const User = (props) => {

	const followUnfollow = () => {
		props.user.followed ? props.state.onUnfollow(props.user.id) :
			props.state.onFollow(props.user.id);
	};
	return (
		<li className="friends__page-user">
			<div className='user__body'>
				<div className='user__follow-img'>
					<div className='user__img'><img src={props.user.img} alt={`img${props.user.name}`} /></div>
				</div>
				<div className='user__info'>
					<div className='user__name-status'>
						<div className='user__name'>{props.user.name}</div>
						<div className='user__status'>{props.user.status}</div>
					</div>
					<div className='user__location'>
						<div className='user__country'>{props.user.location.country},</div>
						<div className='user__city'>{props.user.location.city}</div>
					</div>
				</div>
			</div>
			<button className='user__follow' onClick={followUnfollow}>{props.user.followed ? 'Unfollow' : 'Follow'}</button>
		</li>
	);
};


export default User;