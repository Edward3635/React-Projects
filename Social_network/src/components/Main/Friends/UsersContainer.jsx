import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, setCurrentPage }
	from '../../../redux/usersReducer';
import Users from './Users';

const UsersContainer = () => {

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


	return <Users slicedPages={slicedPages} currentPage={currentPage} onPageChanged={onPageChanged}
		usersData={usersData} isFetching={isFetching} />
}

export default UsersContainer;

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