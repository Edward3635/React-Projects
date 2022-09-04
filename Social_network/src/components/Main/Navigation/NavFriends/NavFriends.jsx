import React from 'react';

const NavFriends = props => {
	return (
		<li>
			<div>
				<div className='nav-friends-img'>
					<img src={require(`../../../../img/dialogAva${props.imgNumber}.jpg`)}
						alt={`FriendAvatar${props.imgNumber}`} />
				</div>
				<div className='nav-friends-name'>{props.name}</div>
			</div>
		</li>
	);
};

export default NavFriends;