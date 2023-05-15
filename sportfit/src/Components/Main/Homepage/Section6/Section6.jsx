import React from 'react'
import belt from '../../../../img/belts.png'
import trunk from '../../../../img/swim.png'
import catalog from '../../../../img/catalog.png'
import MyNavLink from '../../../Common/MyNavLink/MyNavLink';
const Section6 = ({ cl }) => {
	return (
		<section className={cl.section6}>
			<div className={cl.section6Main}>
				<h3>STAY IN TREND WITH SPORTIF</h3>
				<div className={cl.section6ImgBlock}>
					<div className={cl.card}>
						<img src={belt} className={cl.imgBelt} alt="belt" />
						<div>Don't Forget a Belt!</div>
						<MyNavLink to='/stuff'><button className={cl.beltBtn}>SHOP ALL BELTS</button></MyNavLink>
					</div>
					<div className={cl.card}>
						<img src={trunk} className={cl.imgTrunk} alt="swim trunk" />
						<div>Swim Trunk Styles on Sale!</div>
						<MyNavLink to='/stuff'><button className={cl.trunkBtn}>SHOP ALL SWIM TRUNKS</button></MyNavLink>
					</div>
					<div className={cl.card}>
						<img src={catalog} className={cl.imgCatalog} alt="catalog" />
						<div>Shop Newest Online Catalog</div>
						<MyNavLink to='/stuff'><button className={cl.catalogBtn}>SHOP NEWEST CATALOG</button></MyNavLink>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Section6