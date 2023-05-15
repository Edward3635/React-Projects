import React from 'react'
import cl from './Style/css/style.module.css'
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
import Pagination from './Pagination/Pagination';

const Shorts = () => {

	return (
		<main className={cl.main}>
			<div className={cl.sectionsWrapper}>
				<Section1 cl={cl}></Section1>
				<Section2 cl={cl}></Section2>
			</div>
			<Pagination />
		</main>
	)
}

export default Shorts