import React from 'react'
import RateStars from './RateStars/RateStars';

const Section4 = ({ cl }) => {
	const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

	return (

		<section className={cl.section4}>
			<div>
				<div className={cl.title}>You're Reviewing:</div>
				<h3>Sportif's Original Short</h3>
			</div>

			<div>
				<h4 className={cl.yourRating}>Your Rating</h4>
				<ul className={cl.ratingList}>
					<li>
						<h4>OVERALL</h4>
						<RateStars />
					</li>
					<li>
						<h4>COMFORT</h4>
						<RateStars />
					</li>
					<li>
						<h4>QUALITY</h4>
						<RateStars />
					</li>
					<li>
						<h4>FIT</h4>
						<RateStars />
					</li>
				</ul>

			</div>

			<form className={cl.reviewForm} name='review' method='get' action="review.html">
				<div className={cl.inputFlex}>
					<input type="text" name="name" id='name' placeholder='NAME' />
					<input type="text" name="summary" placeholder='SUMMARY' />
				</div>
				<textarea className={cl.areaReview} name="review" placeholder='REVIEW'></textarea>
				<button type='submit' className={cl.btnSubmit}>SUBMIT</button>
			</form>

			<button className={cl.anker} onClick={scrollToTop}>
				<svg width="24" height="37" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M13.0607 0.939339C12.4749 0.353554 11.5251 0.353554 10.9393 0.939339L1.3934 10.4853C0.807611 11.0711 0.807611 12.0208 1.3934 12.6066C1.97919 13.1924 2.92893 13.1924 3.51472 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.939339ZM13.5 37L13.5 2H10.5L10.5 37H13.5Z" fill="white" />
				</svg>
			</button>
		</section>
	)
}

export default Section4