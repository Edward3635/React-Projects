import React from 'react'
import TopNavigation from './TopNavigation/TopNavigation'

const Header = (props) => {
	return (
		<header className='header__container'>
			<TopNavigation itemsNumber={props.itemsNumber} />
		</header>
	)
}

export default Header