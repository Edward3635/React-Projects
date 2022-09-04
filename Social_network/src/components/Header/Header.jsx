import React from 'react';
import InputSearch from './InputSearch/InputSearch';
import Logo from './Logo/Logo';

const Header = () => {
	return (
		<header className='header'>
			<div className='flex__logo-input'>
				<Logo />
				<InputSearch />
			</div>
		</header>
	)
};
export default Header;