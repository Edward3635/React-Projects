import React from 'react';
import User from './User/User';

const Friends = props => {
	const users = props.usersData.map(user => <User key={user.id} />);
	return (<section className='section__users'>{users}</section>);
};
export default Friends;