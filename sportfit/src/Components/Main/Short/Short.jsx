import React from 'react'
import cl from './Style/css/style.module.css';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';
import Section4 from './Section4/Section4';


const Short = (props) => {

	return (
		<main>
			<Section1 cl={cl} setItemsNumber={props.setItemsNumber}></Section1>
			<Section2 cl={cl}></Section2>
			<Section3 cl={cl}></Section3>
			<Section4 cl={cl}></Section4>
		</main>
	)
}

export default Short