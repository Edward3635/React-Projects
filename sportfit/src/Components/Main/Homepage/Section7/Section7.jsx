import React from 'react'
import WhiteButton from '../../../Common/WhiteButton/WhiteButton';
import bottomLogo from '../../../../img/logo_bottom.svg';

const Section7 = ({ cl }) => {

	const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

	return (
		<section className={cl.section7}>
			<div className={cl.section7Main}>
				<img src={bottomLogo} className={cl.section7Img} alt="50 years" />
				<h3>FAMILY OWNED LEGACY</h3>
				<div className={cl.section7Description}>We are proud to celebrate over 50 years of excellence as a family owned and operated business.</div>
					<WhiteButton padding={['11px 73px']}>ABOUT US</WhiteButton>
				<button className={cl.upArrow} onClick={scrollToTop}>
					<svg width="24" height="37" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M13.0607 0.939339C12.4749 0.353554 11.5251 0.353554 10.9393 0.939339L1.3934 10.4853C0.807611 11.0711 0.807611 12.0208 1.3934 12.6066C1.97919 13.1924 2.92893 13.1924 3.51472 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.939339ZM13.5 37L13.5 2H10.5L10.5 37H13.5Z" fill="white" />
					</svg>
				</button>
			</div>
		</section>
	)
}

export default Section7