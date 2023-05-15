import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../img/logo.svg'
import Navbar from './Navbar/Navbar'

const TopNavigation = (props) => {
	return (
		<div className='header'>
			<div className='header__top-nav'>
				<NavLink to='/homepage' className='logo__wrapper'><img src={logo} alt="logo" /></NavLink>
				<Navbar itemsNumber={props.itemsNumber}></Navbar>
			</div>
		</div>
	)
}

export default TopNavigation