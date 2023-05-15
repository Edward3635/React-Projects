import React from 'react'
import cl from '../../Style/css/style.module.css';
import star from '../../../../../img/Star.svg';
import MyNavLink from '../../../../Common/MyNavLink/MyNavLink'

const Card = ({ cardImg, colorsImg }) => {
	return (
		<MyNavLink to='/short'>
			<div className={cl.card}>
				<div><img src={cardImg} alt="original short" /></div>
				<h5>Sportif's Original Short</h5>
				<div>
					<img src={star} alt="star1" />
					<img src={star} alt="star2" />
					<img src={star} alt="star3" />
					<img src={star} alt="star4" />
					<img src={star} alt="star5" />
				</div>
				<span className={cl.cardPrice}>As low as <span >$67.00</span> </span>
				<div><img src={colorsImg} alt="original_short_colors" /> </div>
				<button className={cl.addToCard}>ADD TO CARD</button>
			</div>
		</MyNavLink>
	)
}

export default Card