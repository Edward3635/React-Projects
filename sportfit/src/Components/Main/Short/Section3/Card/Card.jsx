import React from 'react'
import cl from '../../Style/css/style.module.css';
import star from '../../../../../img/small_star.svg';

const Card = (props) => {
	const stars = [...Array(5)].map((_, index) => <img key={index} src={star} className={cl.star} alt='star' />);
	return (
		<div className={cl.card}>
			<ul className={cl.rating}>
				<li>Comfort</li>
				<li>{stars}</li>
				<li>Fit</li>
				<li>{stars}</li>
				<li>Overall</li>
				<li>{stars}</li>
				<li>Quality</li>
				<li>{stars}</li>
			</ul>
			<div className={cl.comment}>
				{props.content}
			</div>
		</div>
	)
}

export default Card