import React from 'react';
import InputSearch from './InputSearch/InputSearch';
import Logo from './Logo/Logo';
import { NavLink } from 'react-router-dom';

const Header = props => {
	return (
		<header className='header'>
			<div className='header__grid'>
				<Logo />
				<InputSearch />
				{props.isAuthorized ?
					<div className='header__ava'>
						{/* <img className='img_ava' src={require('../../img/ava.jpg')} alt="avatar" /> */}
						{props.login}
					</div>
					: <div className='header__login'><NavLink to='/login'>Sign Up</NavLink></div>}
			</div>
		</header>
	)
};
export default Header;