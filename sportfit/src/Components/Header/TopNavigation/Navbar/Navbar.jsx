import React from 'react'
import { NavLink } from 'react-router-dom'
import bag from '../../../../img/bag.svg';

const Navbar = ({ itemsNumber, isClicked, setIsClicked }) => {

	const clickHandler = () => setIsClicked(!isClicked);

	return (
		<ul className={`header__navbar ${isClicked && 'toggle__burger'}`}>
			{!isClicked &&
				<li> <div className='navbar__bag'>
					<img src={bag} alt="bag" />
					{itemsNumber > 0 &&
						<div className='bag__wrapper'><span className='bag__counter'>{itemsNumber}</span></div>}
				</div></li>}
			<li><NavLink onClick={clickHandler} to='/stuff'>SHORTS</NavLink></li>
			<li><NavLink onClick={clickHandler} to='/stuff'>PANTS</NavLink></li>
			<li><NavLink onClick={clickHandler} to='/stuff'>SHIRTS</NavLink></li>
			<li><NavLink onClick={clickHandler} to='/stuff'>ACCESSORIES</NavLink></li>
			<li><NavLink onClick={clickHandler} to='/stuff'>SALE</NavLink></li>
			{!isClicked &&
				<li className='header__search-wrapper'><input className='header__search ' type="search"
					placeholder='SEARCH ENTIRE STORE HERE' /></li>}
		</ul>
	)
}

export default Navbar