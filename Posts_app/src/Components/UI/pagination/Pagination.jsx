import React from 'react'
import { getPagesArray } from '../../../utils/pages';

const Pagination = ({totalPage,changePage,page}) => {
	let pagesArray = getPagesArray(totalPage);
	const pagination = pagesArray.map((p) =>
		<span onClick={() => changePage(p)} className={page === p ? 'page page__current' : 'page'} key={p}>
			{p}
		</span>);

	return (
		<div className='page__wrapper'>{pagination}</div>
	)
}

export default Pagination