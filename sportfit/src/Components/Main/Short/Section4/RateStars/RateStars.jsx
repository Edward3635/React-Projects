import React, { useState } from 'react'
import emptyStar from '../../../../../img/rating_star.svg';
import fillStar from '../../../../../img/rating_star-hover.svg';
import cl from '../../Style/css/style.module.css';

const RateStars = () => {

	const [highlightedStars, setHighlightedStars] = useState(0);
	const [rating, setRating] = useState(0);

	const onStarHover = (index) => setHighlightedStars(index);

	const onStarLeave = () => {
		if (highlightedStars !== rating) setHighlightedStars(rating);
	};
	const onStarClick = (index) => setRating(index);

	const stars = [1, 2, 3, 4, 5].map((index) => (
		<img
			key={index}
			src={index <= highlightedStars ? fillStar : emptyStar}
			alt='star'
			onMouseEnter={() => onStarHover(index)}
			onMouseLeave={() => onStarLeave()}
			onClick={() => onStarClick(index)}
		/>
	))

	return (
		<div className={cl.stars}>
			{stars}
		</div>
	)
}


export default RateStars