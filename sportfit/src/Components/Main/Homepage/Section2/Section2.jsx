import React from 'react'
import star from '../../../../img/Star.svg';
import emptyStar from '../../../../img/empty_star.svg';
import Card1 from './Card1/Card1';
import Card2 from './Card2/Card2';
import Card3 from './Card3/Card3';
import Card4 from './Card4/Card4';
import MyNavLink from '../../../Common/MyNavLink/MyNavLink';


const Section2 = ({ cl }) => {

	return (
		<section className={cl.section2}>
			<div className={cl.section2Title}>
				<h4>TGIF, INLET, AND MARCHAL'S COLLECTIONS</h4>
				<h4 className={cl.section2BigText}>NOW 40% OFF!</h4>
			</div>
			<div className={cl.section2Cards}>
				<MyNavLink to='/short'><Card1 star={star} cl={cl} /></MyNavLink>
				<MyNavLink to='/short'><Card2 star={star} cl={cl} /></MyNavLink>
				<MyNavLink to='/short'><Card3 star={star} emptyStar={emptyStar} cl={cl} /></MyNavLink>
				<MyNavLink to='/short'><Card4 star={star} emptyStar={emptyStar} cl={cl} /></MyNavLink>
			</div>
		</section>
	)
}

export default Section2