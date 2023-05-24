import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../img/logo.svg'
import bag from '../../../img/bag.svg';
import Navbar from './Navbar/Navbar'

const TopNavigation = (props) => {
	const [isClicked, setIsClicked] = useState(false);
	
	const toggleBurger = () => setIsClicked(!isClicked);

	return (
		<div className='header'>
			<div className='header__top-nav'>
				<NavLink to='/homepage' className='logo__wrapper'><img src={logo} alt="logo" /></NavLink>
				<Navbar itemsNumber={props.itemsNumber} isClicked={isClicked} setIsClicked={setIsClicked}></Navbar>
				<div className='bag__burger'>
					<div className='navbar__bag'>
						<img src={bag} alt="bag" />
						{props.itemsNumber > 0 &&
							<div className='bag__wrapper'><span className='bag__counter'>{props.itemsNumber}</span></div>}
					</div>

					<div onClick={toggleBurger} className={`burger ${isClicked && 'active'}`}>
						<span></span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TopNavigation