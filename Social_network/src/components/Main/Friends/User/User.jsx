import React from 'react';
import userPhoto from '../../../../img/userPhoto.png';

const User = (props) => {
	const followUnfollow = () => {
		props.user.followed ? props.state.onUnfollow(props.user.id) :
			props.state.onFollow(props.user.id);
	};
	return (
		<li className='friends__page-user'>
			<div className='user__body'>
				<div className='user__follow-img'>
					<div className='user__img'>
						<img src={props.user.photos.small != null ? props.user.photos.small : userPhoto}
							alt={`img${props.user.name}`} />
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
			<button className='user__follow' onClick={followUnfollow}>{props.user.followed ? 'Unfollow' : 'Follow'}</button>
		</li>
	);
};


export default User;

// [
// 	{
// 		id: 1, followed: true, name: 'Homer', status: "I'm designer from Poland", location: {
// 			country: 'Poland', city: 'Wrocław'
// 		}, img: 'https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
// 	},
// 	{
// 		id: 2, followed: false, name: 'Mary', status: 'Help me to choose dress', location: {
// 			country: 'Switzerland', city: 'Bern	'
// 		}, img: 'https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
// 	},
// 	{
// 		id: 3, followed: false, name: 'James', status: 'Look at my page!', location: {
// 			country: 'Spain', city: 'Barcelona'
// 		}, img: 'https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
// 	},
// 	{
// 		id: 4, followed: true, name: 'Jennifer', status: 'Do you want new friends? Add me!', location: {
// 			country: 'Ukraine', city: 'Lviv'
// 		}, img: 'https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
// 	},
// 	{
// 		id: 5, followed: true, name: 'Richard', status: 'Leave me alone...', location: {
// 			country: 'Romania', city: 'Bucharest'
// 		}, img: 'https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
// 	},
// 	{
// 		id: 6, followed: false, name: 'Scott', status: 'Buongiorno!', location: {
// 			country: 'France', city: 'Paris'
// 		}, img: 'https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
// 	}
// ]