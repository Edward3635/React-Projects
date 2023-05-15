import React from 'react'
import cl from './Style/css/style.module.css'
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';
import Section4 from './Section4/Section4';
import Section5 from './Section5/Section5';
import Section6 from './Section6/Section6';
import Section7 from './Section7/Section7';

const Homepage = () => {
	return (
		<main>
			<Section1 cl={cl}></Section1>
			<Section2 cl={cl}></Section2>
			<Section3 cl={cl}></Section3>
			<Section4 cl={cl}></Section4>
			<Section5 cl={cl}></Section5>
			<Section6 cl={cl}></Section6>
			<Section7 cl={cl}></Section7>

		</main>
	)
}

export default Homepage