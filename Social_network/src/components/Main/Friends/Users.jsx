import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, setCurrentPage } from '../../../redux/usersReducer';
import Preloader from '../../Common/Preloader/Preloader';
import PageNumbers from './PageNumbers/PageNumbers';
import User from './User/User';

const Users = () => {

	const usersData = useSelector(state => state.friendsPage.usersData),
		pageSize = useSelector(state => state.friendsPage.pageSize),
		totalUsersCount = useSelector(state => state.friendsPage.totalUsersCount),
		currentPage = useSelector(state => state.friendsPage.currentPage),
		isFetching = useSelector(state => state.friendsPage.isFetching),
		dispatch = useDispatch(),

		pagesCount = Math.ceil(totalUsersCount / pageSize),
		pages = [...Array(pagesCount).keys()].map(x => ++x), //fill array 1 to pagesCount

		onPageChanged = (pageNumber) => {
			dispatch(setCurrentPage(pageNumber))
			window.scrollTo(0, 0)
		},

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

	useEffect(() => (dispatch(getUsers(currentPage, pageSize))),
		[currentPage, dispatch, pageSize]);

	return (
		<section className='section__users'>
			{isFetching ? <Preloader /> : null}
			<div className='users__header'>
				<div className='users__title'>Users</div>
				<PageNumbers slicedPages={slicedPages} onPageChanged={onPageChanged} currentPage={currentPage} />
			</div>
			<ul className='user__list'>
				{usersData.map(user => <User key={user.id} user={user} />)}
			</ul>
			<PageNumbers slicedPages={slicedPages} onPageChanged={onPageChanged} currentPage={currentPage} />
		</section>);
};
export default Users;


// const mapStateToProps = state => {
// 	return {
// 		usersData: state.friendsPage.usersData,
// 		pageSize: state.friendsPage.pageSize,
// 		totalUsersCount: state.friendsPage.totalUsersCount,
// 		currentPage: state.friendsPage.currentPage,
// 		isFetching: state.friendsPage.isFetching
// 	};
// };


// mapDispatchToProps = dispatch => {
// 	return {
// 		onFollow: userId => dispatch(followAC(userId)),
// 		onUnfollow: userId => dispatch(unfollowAC(userId)),
// 		setUsers: usersData => dispatch(setUsersAC(usersData)),
// 		setCurrentPage: pageNumber => dispatch(setCurrentPageAC(pageNumber)),
// 		setTotalUsersCount: totalCount => dispatch(setTotalUsersCountAC(totalCount)),
// 		toggleIsFetching: isFetching => dispatch(toggleIsFetchingAC(isFetching))
// 	};
// };


// export default connect(mapStateToProps,
// 	{ follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching })(UsersContainer);