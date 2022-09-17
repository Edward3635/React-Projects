import React from 'react';

const PageNumbers = props => {
	return (
		<div className='page__numbers'>
			{props.slicedPages(props.currentPage).map(page => <span
				className={`${props.currentPage === page ? 'current__page-number' : ''} page__number`}
				key={page} onClick={() => props.onPageChanged(page)}>{page}</span>)}
		</div>
	);
};


export default PageNumbers;
