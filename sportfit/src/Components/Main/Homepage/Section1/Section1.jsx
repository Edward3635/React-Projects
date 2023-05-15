import React from 'react'
import img1 from '../../../../img/img1.png';
import WhiteButton from '../../../Common/WhiteButton/WhiteButton';
import { NavLink } from 'react-router-dom'

const Section1 = ({ cl }) => {
	return (
		<section className={cl.section1}>
			<div className={cl.section1Text}>
				<h3 className={cl.titleTop}>
					BEST SELLING STRETCH SHORTS
				</h3>
				<span className={cl.titleTopDescription}>Get the perfect fit with 6 different inseam lengths.</span>
				<NavLink to='/stuff'><WhiteButton padding={['9px 12px']}>SHOP ALL SHORTS</WhiteButton></NavLink>
			</div>
			<div className={cl.sectionImg}>
				<div className={cl.fillSquare}></div>
				<img className={cl.picture} src={img1} alt="img1" title='Front image' />
				<div className={cl.emptySquare}></div>
			</div>
		</section>
	)
}

export default Section1