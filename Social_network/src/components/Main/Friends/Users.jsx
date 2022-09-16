import React from 'react'
import Preloader from '../../Common/Preloader/Preloader';
import User from './User/User';

const Users = props => {
	const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize),
		pages = [...Array(pagesCount).keys()].map(x => ++x), //fill array 1 to pagesCount

		slicedPages = () => {
			const currentPage = props.currentPage,
				currentPageFirst = ((currentPage - 5) < 0) ? 0 : currentPage - 5,
				currentPageLast = currentPage + 5;

			return pages.slice(currentPageFirst, currentPageLast);
		};
	return (
		<section className='section__users'>
			<div className='users__title'>Users</div>
			{props.isFetching ? <Preloader /> : null}
			<div className='page__numbers'>
				{slicedPages().map(page => <span
					className={`${props.currentPage === page ? 'current__page-number' : ''} page__number`}
					key={page} onClick={() => props.onPageChanged(page)}>{page}</span>)}
			</div>
			<ul className='user__list'>
				{props.usersData.map(user => <User key={user.id} user={user} onFollow={props.onFollow}
					onUnfollow={props.onUnfollow} />)}
			</ul>
		</section>);
};
export default Users