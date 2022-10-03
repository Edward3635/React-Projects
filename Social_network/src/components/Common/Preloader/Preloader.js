import React from 'react'
import preloader from '../../../img/preloader.svg';


const Preloader = (props) => {
	return (<div className={`users__preloader ${props.divClass ? props.divClass : null}`}>
		<img className={`${props.imgClass ? props.imgClass : null}`} src={preloader} alt="preloader" />
	</div>
	);
};

export default Preloader