import React, { useState } from 'react'
import arrow from '../../../../img/sidebar_arrow.svg';
import Accordeon from '../../../Common/Accordeon/Accordeon';

const Section1 = ({ cl }) => {
	const [toggle, setToggle] = useState([]);

	const toggleState = (id) => {
		if (toggle.includes(id)) {
			setToggle(toggle.filter((blockId) => blockId !== id));
		} else {
			setToggle([...toggle, id]);
		}
	};
	return (
		<section className={cl.section1}>
			<Accordeon className={cl.filterWrapper} toggle={toggle} toggleState={toggleState}
				array={[30, 32, 34, 36, 38, 40, 42, 44, 46]} activeClass={cl.sizeActive}>SIZE</Accordeon>
			<Accordeon className={cl.filterWrapper} toggle={toggle} toggleState={toggleState}
				array={new Array(7).fill(null)} activeClass={cl.colorActive}>COLOR</Accordeon>
			<Accordeon className={cl.filterWrapper} toggle={toggle} toggleState={toggleState}
				array={['Short', 'Cargo', 'Plain Front', 'Denim Jean', 'Chino', 'Swim', 'Pleated Front']}
				activeClass={cl.bottomsActive} inputs={true}>BOTTOMS</Accordeon>
			<Accordeon className={cl.filterWrapper} toggle={toggle} toggleState={toggleState}
				array={['S', 'M', 'L', 'XL', 'XXL']} activeClass={cl.inseamActive}>INSEAM</Accordeon>
			<Accordeon className={cl.filterWrapper} toggle={toggle} toggleState={toggleState}
				array={['Organic cotton', 'Hemp', 'Linen', 'Bamboo', 'Tencel', 'Wool', 'Cupro', 'Modal']}
				activeClass={cl.fabricActive} inputs={true}>SUSTAINABLE FABRIC</Accordeon>
			<Accordeon className={cl.filterWrapper} toggle={toggle} toggleState={toggleState}
				array={[2018, 2019, 2020, 2021, 2022, 2023]} activeClass={cl.collectionsActive}>COLLECTIONS</Accordeon>
		</section>
	)
}

export default Section1;