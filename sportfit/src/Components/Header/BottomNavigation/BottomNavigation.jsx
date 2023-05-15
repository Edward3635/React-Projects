import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import home from '../../../img/home.png'
import { useLocation } from 'react-router-dom';

const BottomNavigation = () => {
	const [isStuffpage, setIsStuffPage] = useState(false);
	const location = useLocation();
	useEffect(() => {
		setIsStuffPage(!location.pathname.includes('/short'));
	}, [location.pathname]);
	return (
		<div className='header__bottom-nav'>
			<div className='breadcrumbs'>
				<ul>
					<li>
						<NavLink to='/homepage'>
							<img src={home} alt="home.svg" />
							HOME
						</NavLink>
					</li>
					<li className='operand'> &gt;</li>
					{!isStuffpage ? <li><NavLink to='/stuff'>SHORTS</NavLink></li> : <li>SHORTS</li>}
					{!isStuffpage && <li className='operand'> &gt;</li>}
					{!isStuffpage && <li>Sportif's Original Short</li>}
				</ul>
			</div>
			{isStuffpage && <div className='nav-input__wrapper'>
				<input className='header__nav-input' type="search" placeholder='SEARCH' />
			</div>}
		</div>
	)
}

export default BottomNavigation