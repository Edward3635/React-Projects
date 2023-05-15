import React from 'react'
import tgifPant from '../../../../../img/tgif_pant.png';

const Card3 = ({ star, emptyStar, cl }) => {
	return (
		<div className={cl.clothesCards}>
			<img src={tgifPant} alt="pant" />
			<span className={cl.cardName}>TGIF Pant</span>
			<div className={cl.stars}>
				<img src={star} alt="star1" />
				<img src={star} alt="star2" />
				<img src={star} alt="star3" />
				<img src={star} alt="star4" />
				<img src={emptyStar} alt="star5" />
			</div>
			<span className={cl.cardPrice}>As low as <span >$40.99</span> </span>
			<button className={cl.addToCard}>ADD TO CARD</button>
		</div>
	)
}

export default Card3