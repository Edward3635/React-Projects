import React from 'react'
import cl from 'components/Common/Loader/loader.module.scss';
import loader from 'img/commonIcons/loading.png';

const Loader = (props) => {
	return (
		<div className={cl.loaderWrapper}>
			<img className={`${cl.loader} ${props.loaderStyle?.forecastLoader ? cl.forecastLoader : ''}`} src={loader} alt="loading" />
		</div>
	)
}

export default Loader