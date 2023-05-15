import React from 'react'
import cl from '../Style/css/style.module.css';
const Pagination = () => {
	return (
		<div className={cl.pagination}>
			<ul>
				<a href='#'><li className={cl.currentPage}>1</li></a>
				<a href='#'><li>2</li></a>
				<a href='#'><li>&gt;&gt;</li></a>
			</ul>
		</div>
	)
}

export default Pagination