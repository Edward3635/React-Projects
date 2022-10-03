import React from 'react';
import InputSearch from './InputSearch/InputSearch';
import Logo from './Logo/Logo';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/authReducer';

const Header = () => {
	const isAuthorized = useSelector(state => state.authorization.isAuthorized),
		login = useSelector(state => state.authorization.login),
		//isFetching = useSelector(state => state.authorization.isFetching),
		//userId = useSelector(state => state.authorization.id),
		dispatch = useDispatch(),
		onLogout = () => { dispatch(logout()) };

	return (
		<header className='header'>
			<div className='header__grid'>
				<Logo />
				<InputSearch />
				{isAuthorized ? <div className='header__ava'>
					{/* <img className='img_ava' src={require('../../img/ava.jpg')} alt="avatar" /> */}
					{login}
					<div className='header__logout' onClick={onLogout} >Logout</div>
				</div>
					: <div className='header__login'><NavLink to='/signIn'>Sign In</NavLink></div>}
			</div>
		</header>
	)
};
export default Header;