import React from 'react';
import User from './User/User';

const Friends = props => {
	if (props.usersData.length === 0) props.setUsers([
		{
			id: 1, followed: true, name: 'Homer', status: "I'm designer from Poland", location: {
				country: 'Poland', city: 'Wrocław'
			}, img: 'https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
		},
		{
			id: 2, followed: false, name: 'Mary', status: 'Help me to choose dress', location: {
				country: 'Switzerland', city: 'Bern	'
			}, img: 'https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
		},
		{
			id: 3, followed: false, name: 'James', status: 'Look at my page!', location: {
				country: 'Spain', city: 'Barcelona'
			}, img: 'https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
		},
		{
			id: 4, followed: true, name: 'Jennifer', status: 'Do you want new friends? Add me!', location: {
				country: 'Ukraine', city: 'Lviv'
			}, img: 'https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
		},
		{
			id: 5, followed: true, name: 'Richard', status: 'Leave me alone...', location: {
				country: 'Romania', city: 'Bucharest'
			}, img: 'https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
		},
		{
			id: 6, followed: false, name: 'Scott', status: 'Buongiorno!', location: {
				country: 'France', city: 'Paris'
			}, img: 'https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
		}
	]);
	const users = props.usersData.map(user => <User key={user.id} user={user} state={props} />);
	return (
		<section className='section__users'>
			<div className='users__title'>Users</div>
			<ul className='user__list'>{users}</ul>
		</section>);
};
export default Friends;