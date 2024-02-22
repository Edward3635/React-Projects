import React from 'react'
import cl from './navButtons.module.scss'

const NavButtons = ({ handleScrollLeft, handleScrollRight }) => {
	return (
		<div className={cl.wrapper}>
			<button onClick={handleScrollLeft} className={cl.button}>&lt; LEFT</button>
			<button onClick={handleScrollRight} className={cl.button}>RIGHT &gt;</button>
		</div>
	)
}

export default NavButtons