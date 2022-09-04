import React from 'react';

const Logo = () => {
	return (
		<div className='header__logo'>
			<img className='img__logo' src={require('../../../img/logo.png')} alt="logo" />
		</div>
	)
};
export default Logo;