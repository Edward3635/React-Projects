import React from 'react';
import InputSearch from './InputSearch/InputSearch';
import Logo from './Logo/Logo';

const Header = () => {
	return (
		<header className='header'>
			<div className='header__grid'>
				<Logo />
				<InputSearch />
				<div className='header__ava'><img className='img_ava' src={require('../../img/ava.jpg')} alt="avatar" /> </div>
			</div>
		</header>
	)
};
export default Header;