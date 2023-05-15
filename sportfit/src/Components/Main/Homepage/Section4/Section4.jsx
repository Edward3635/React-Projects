import React from 'react'
import powel from '../../../../img/powel.png';
import ecoths from '../../../../img/ecoths.png';
import WhiteButton from '../../../Common/WhiteButton/WhiteButton';
import MyNavLink from '../../../Common/MyNavLink/MyNavLink'

const Section4 = ({ cl }) => {
	return (
		<section className={cl.section4}>
			<div className={cl.section4MainBlock}>
				<div className={cl.section4CardBlock}>
					<div className={cl.section4Img}>
						<img src={ecoths} alt="ecoths" />
						<div className={cl.section4imgText}>ECOTHS: NOW 30% OFF!</div>
					</div>
					<div>
						Our entire Ecoths collection is on sale! Plus, for every Ecoths purchase we donate 3 meals to
						food banks across the United States. We’re over 400,000 meals in now.
					</div>
					<MyNavLink to='/stuff'>
						<WhiteButton padding={['9px', '67px']}>SHOP ECOTHS SALE</WhiteButton>
					</MyNavLink>
				</div>
				<div className={cl.section4CardBlock}>
					<div className={cl.section4Img}>
						<img src={powel} alt="ecoths" />
						<div className={cl.section4imgText}>NEW POWELL PRINT SHIRT</div>
					</div>
					<div>
						New from Old Ranch Brands, the Powell short sleeve print shirt!
						Look effortlessly sharp in this lightweight cotton shirt with a classic shape and convenient features.
					</div>
					<MyNavLink to='/stuff'>
						<WhiteButton padding={['9px', '18px']}>SHOP POWEL SHORT SLEEVE</WhiteButton>
					</MyNavLink>
				</div>
			</div>
		</section>
	)
}


export default Section4