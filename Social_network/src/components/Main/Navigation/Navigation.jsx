import React from 'react';
import { NavLink } from 'react-router-dom';
import NavFriends from './NavFriends/NavFriends';

const Navigation = props => {
	let sideBarFriends = props.store
		//.sort(() => Math.random() - 0.5)
		.slice(0, 3)
		.map(el => <NavFriends imgNumber={el.id} name={el.name} key={el.id} />);

	return (
		<nav className='main__nav'>
			<ul>
				<li><NavLink to='/profile'>Profile</NavLink></li>
				<li><NavLink to='/messages'>Messages</NavLink></li>
				<li><NavLink to='/news'>News</NavLink></li>
				<li><NavLink to='/music'>Music</NavLink></li>
				<li className='navigation__settings'>
					<NavLink to='/settings'>Settings</NavLink>
				</li>
				<li className='navigation__friends'>
					<NavLink to='/friends'>Friends</NavLink>
					<ul className='ul__nav-friends'>
						{sideBarFriends}
					</ul>
				</li>
			</ul >
		</nav >
	);
};

export default Navigation;