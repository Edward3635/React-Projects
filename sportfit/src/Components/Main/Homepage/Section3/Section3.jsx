import React from 'react'
import bestsellingPants from '../../../../img/bestselling_pants.png'
import WhiteButton from '../../../Common/WhiteButton/WhiteButton'
import MyNavLink from '../../../Common/MyNavLink/MyNavLink'

const Section3 = ({ cl }) => {
	return (
		<section className={cl.section3}>
			<div className={cl.pantsImgBlock}>
				<img src={bestsellingPants} alt="bestselling pants" />
				<div className={cl.pantsRectangle1}></div>
				<div className={cl.pantsRectangle2}></div>
			</div>
			<div className={cl.pantsBlockText}>
				<h3>OUR BESTSELLING PANTS</h3>
				<span className={cl.spanPantsDescription}>
					Our classic cargo pants are built to last and designed to exceed your expectations!
					From Frequent Traveler to Hatteras to Trinidad, we have the perfect fit for you!
				</span>
				<MyNavLink to='/stuff'>
					<WhiteButton padding={['9px', '23px']}>SHOP ALL PANTS</WhiteButton>
				</MyNavLink>
			</div>
		</section>
	)
}

export default Section3