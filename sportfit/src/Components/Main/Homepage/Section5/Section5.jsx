import React from 'react'
import MyNavLink from '../../../Common/MyNavLink/MyNavLink';

const Section5 = ({ cl }) => {
	return (
		<section className={cl.section5}>
			<div className={cl.section5Main}>
				<h3>SPORTIF ORIGINAL PANT</h3>
				<div>
					Our classic nautical cargo pants are built to last and designed to exceed your expectations!
					Crafted from our stretch twill blend that offers the comfort of cotton,
					the wrinkle resistance of polyester and the mobility of Lycra®.
				</div>
				<MyNavLink to='/stuff'>
					<button className={cl.section5Btn}>SHOP SPORTIF ORIGINAL PANT</button>
				</MyNavLink>
			</div>
		</section>
	)
}

export default Section5