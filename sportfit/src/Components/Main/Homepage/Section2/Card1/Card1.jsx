import React from 'react'
import cargo from '../../../../../img/cargo_short.png';

const Card1 = ({ star, cl }) => {
	return (
		<div className={cl.clothesCards}>
			<img src={cargo} alt="cargo" />
			<span className={cl.cardName}>Marchal's Original Cargo Short</span>
			<div className={cl.stars}>
				<img src={star} alt="star1" />
				<img src={star} alt="star2" />
				<img src={star} alt="star3" />
				<img src={star} alt="star4" />
				<img src={star} alt="star5" />
			</div>
			<span className={cl.cardPrice}>As low as <span >$40.99</span> </span>
			<button className={cl.addToCard}>ADD TO CARD</button>
		</div>
	)
}

export default Card1