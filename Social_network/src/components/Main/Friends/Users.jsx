import React from 'react'
import Preloader from '../../Common/Preloader/Preloader';
import PageNumbers from './PageNumbers/PageNumbers';
import User from './User/User';

const Users = props => {
	const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize),
		pages = [...Array(pagesCount).keys()].map(x => ++x), //fill array 1 to pagesCount

		slicedPages = (currentPage) => {
			const currentPageFirst = ((currentPage - 3) <= 0) ? 0 : currentPage - 3,
				currentPageLast = ((currentPage - 3) <= 0) ? 5 : currentPage + 2;
			// if (currentPage - 3 <= 0) {
			// 	currentPageFirst = 0;
			// 	currentPageLast = 5;
			// } else {
			// 	currentPageFirst = currentPage - 3;
			// 	currentPageLast = currentPage + 2;
			// }

			return pages.slice(currentPageFirst, currentPageLast);
		};
	return (
		<section className='section__users'>
			<div className='users__title'>Users</div>
			{props.isFetching ? <Preloader /> : null}
			<PageNumbers slicedPages={slicedPages} onPageChanged={props.onPageChanged} currentPage={props.currentPage} />
			<ul className='user__list'>
				{props.usersData.map(user => <User key={user.id} user={user} onFollow={props.onFollow}
					onUnfollow={props.onUnfollow} currentPage={props.currentPage} pageSize={props.pageSize} />)}
			</ul>
			<PageNumbers slicedPages={slicedPages} onPageChanged={props.onPageChanged} currentPage={props.currentPage} />
		</section>);
};
export default Users