import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow }
	from '../../redux/usersReducer';
import * as axios from 'axios'
import Users from './Users';

const UsersContainer = () => {

	const usersData = useSelector(state => state.friendsPage.usersData),
		pageSize = useSelector(state => state.friendsPage.pageSize),
		totalUsersCount = useSelector(state => state.friendsPage.totalUsersCount),
		currentPage = useSelector(state => state.friendsPage.currentPage),
		isFetching = useSelector(state => state.friendsPage.isFetching),
		dispatch = useDispatch();
		
	useEffect(() => {
		dispatch(toggleIsFetching(true));
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage
			}&count=${pageSize}`)
			.then(response => {
				dispatch(toggleIsFetching(false));
				dispatch(setUsers(response.data.items));
				dispatch(setTotalUsersCount(response.data.totalCount));
			});
	}, [currentPage])

	const onPageChanged = (pageNumber) => {
		dispatch(setCurrentPage(pageNumber))
		// props.toggleIsFetching(true)
		// props.setCurrentPage(pageNumber);
		// axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`)
		// 	.then(response => {
		// 		props.toggleIsFetching(false);
		// 		props.setUsers(response.data.items);
		// 	});
	};

	return <Users totalUsersCount={totalUsersCount} pageSize={pageSize}
		currentPage={currentPage} onPageChanged={onPageChanged} usersData={usersData}
		onFollow={follow} onUnfollow={unfollow} isFetching={isFetching} />

}

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
export default UsersContainer;