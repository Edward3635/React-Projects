import React from 'react';
import originalShort from '../../../../img/original_short.png';
import originalShortColors from '../../../../img/original_short_colors.png';
import hatterasShort from '../../../../img/hatteras_short.png';
import hatterasShortColors from '../../../../img/hatteras_short_colors.png';
import tidewaterShort from '../../../../img/tidewater_short.png';
import tidewaterShortColors from '../../../../img/tidewater_short_colors.png';
import lauderdaleShort from '../../../../img/lauderdale_short.png';
import lauderdaleShortColors from '../../../../img/lauderdale_short_colors.png'
import captainsShort from '../../../../img/captains_short.png';
import captainsShortColors from '../../../../img/captains_short_colors.png'
import plainShort from '../../../../img/plain_short.png';
import plainShortColors from '../../../../img/plain_short_colors.png'
import pleatedShort from '../../../../img/pleated_short.png';
import pleatedShortColors from '../../../../img/pleated_short_colors.png'
import denimCargoShort from '../../../../img/denim_cargo_short.png';
import denimCargoShortColors from '../../../../img/denim_cargo_short_colors.png'
import MarchalsHatterasShort from '../../../../img/marchals_hatteras_short.png';
import MarchalsHatterasShortColors from '../../../../img/marchals_hatteras_short_colors.png'
import ashcroftShort from '../../../../img/ashcroft_short.png';
import ashcroftShortColors from '../../../../img/ashcroft_short_colors.png'
import gannonShort from '../../../../img/gannon_short.png';
import gannonShortColors from '../../../../img/gannon_short_colors.png'
import Card from './Card/Card';

const Section2 = ({ cl }) => {

	const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

	return (
		<section className={cl.section2}>
			<div className={cl.gridCards}>
				<Card cardImg={originalShort} title={"Sportif's Original Short"} price={'67.00'}
					colorsImg={originalShortColors}></Card>
				<Card cardImg={hatterasShort} title={"Sportif's Hatteras Short"} price={'54.99'}
					colorsImg={hatterasShortColors}></Card>
				<Card cardImg={tidewaterShort} title={"Sportif's Tidewater Short"} price={'54.99'}
					colorsImg={tidewaterShortColors}></Card>
				<Card cardImg={lauderdaleShort} title={"Sportif's Lauderdale Short"} price={'67.00'}
					colorsImg={lauderdaleShortColors}></Card>
				<Card cardImg={captainsShort} title={"Captain's Short"} price={'67.00'}
					colorsImg={captainsShortColors}></Card>
				<Card cardImg={plainShort} title={"Galapagos Plain Short"} price={'34.99'}
					colorsImg={plainShortColors}></Card>

				<Card cardImg={pleatedShort} title={"Galapagos Pleated Short"} price={'34.99'}
					colorsImg={pleatedShortColors}></Card>
				<Card cardImg={denimCargoShort} title={"Sportif's Tidewater Denim Cargo Short"} price={'69.00'}
					colorsImg={denimCargoShortColors}></Card>
				<Card cardImg={MarchalsHatterasShort} title={"Marchal's Hatteras Short"} price={'40.99'}
					colorsImg={MarchalsHatterasShortColors}></Card>
				<Card cardImg={ashcroftShort} title={"Ecoths Ashcroft Short"} price={'41.99'}
					colorsImg={ashcroftShortColors}></Card>
				<Card cardImg={gannonShort} title={"Ecoths Gannon Short"} price={'42.99'}
					colorsImg={gannonShortColors}></Card>
			</div>
			<button className={cl.anker} onClick={scrollToTop}>
				<svg width="24" height="37" viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M13.0607 0.939339C12.4749 0.353554 11.5251 0.353554 10.9393 0.939339L1.3934 10.4853C0.807611 11.0711 0.807611 12.0208 1.3934 12.6066C1.97919 13.1924 2.92893 13.1924 3.51472 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.939339ZM13.5 37L13.5 2H10.5L10.5 37H13.5Z" fill="white" />
				</svg>
			</button>
		</section>
	)
}

export default Section2