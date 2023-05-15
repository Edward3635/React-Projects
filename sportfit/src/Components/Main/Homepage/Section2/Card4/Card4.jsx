import React from 'react'
import inletPant from '../../../../../img/inlet_pant.png';

const Card4 = ({ star, emptyStar, cl }) => {
	return (
		<div className={cl.clothesCards}>
			<img src={inletPant} alt="cargo" />
			<span className={cl.cardName}>Inlet Original Pant</span>
			<div className={cl.stars}>
				<img src={star} alt="star1" />
				<img src={star} alt="star2" />
				<img src={star} alt="star3" />
				<img src={star} alt="star4" />
				<img src={emptyStar} alt="star5" />
			</div>
			<span className={cl.cardPrice}>As low as <span >$52.99</span> </span>
			<button className={cl.addToCard}>ADD TO CARD</button>
		</div>
	)
}

export default Card4